import pg from 'pg';
import express from 'express';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades";
    `;
    const params = [];
    const result = await db.query(sql, params);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('query failed');
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const { name, course, score } = req.body;
    const params = [name, course, score];
    if (!name || !course || score === undefined) {
      res
        .status(400)
        .json({ error: 'invalid grade, missing name, course, or score' });
      return;
    }
    const scoreInt = parseInt(score, 10);
    if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
      res.status(400).send('score must be integer between 0-100');
      return;
    }
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('query failed');
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const sql = `
    update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = $4
      returning *;
    `;

    const { name, course, score } = req.body;
    const gradeId = parseInt(req.params.gradeId, 10);
    const scoreInt = parseInt(score, 10);
    if (!name || !course || score === undefined) {
      res
        .status(400)
        .json({ error: 'invalid grade, missing name, course, or score' });
      return;
    }
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: 'gradeId must be positive integer' });
      return;
    }
    if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
      res.status(400).send('score must be integer between 0-100');
      return;
    }
    const params = [name, course, scoreInt, gradeId];
    const result = await db.query(sql, params);

    if (result.rows.length === 0) {
      res.status(404).json({ error: `Can't find grade of gradeId ${gradeId}` });
      return;
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('query failed');
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const sql = `
   delete
    from "grades"
     where "gradeId" = $1
     returning *;
   `;
    const gradeId = parseInt(req.params.gradeId);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: 'gradeId must be positive integer' });
      return;
    }
    const params = [gradeId];
    const result = await db.query(sql, params);

    if (result.rows.length === 0) {
      res.status(404).json({ error: `Can't find grade of gradeId ${gradeId}` });
      return;
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('query failed');
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
