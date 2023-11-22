import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

type Note = {
  content: string;
  id: number;
};
type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

async function readData(): Promise<Data> {
  const data = await readFile('./data.json');
  return JSON.parse(data.toString());
}

async function writeData(data: Data) {
  await writeFile('./data.json', JSON.stringify(data, null, 2));
}

app.get('/api/notes', async (req, res, next) => {
  try {
    const data = await readData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (err) {
    next(err);
  }
});

app.get('/api/notes/:id', async (req, res, next) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);
    if (id < 1 || Number.isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    const note = data.notes[id];
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const { content } = req.body;
    if (typeof content !== 'string') {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const data = await readData();
    const note: Note = {
      content,
      id: data.nextId,
    };
    data.notes[note.id] = note;
    data.nextId++;
    await writeData(data).catch(() => {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (id < 1 || Number.isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    delete data.notes[id];
    await writeData(data).catch(() => {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.put('/api/notes/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { content } = req.body;
    if (id < 1 || Number.isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (typeof content !== 'string') {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    data.notes[id].content = content;
    try {
      await writeData(data);
      res.status(200).json(data.notes[id]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
