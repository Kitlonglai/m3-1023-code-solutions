import express from "express";

let nextID = 1;
type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};
const app = express();

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.use(jsonMiddleware, (req, res, next) => {
  console.log('Method: ', req.method);
  next();
})

app.get('/api/grades', (req, res) => {
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body as Grade;
  newGrade.id = nextID++;
  grades[newGrade.id] = newGrade;
  res.status(201).json(newGrade);
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})
