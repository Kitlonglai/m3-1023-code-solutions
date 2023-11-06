import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Method: ', req.method);
  res.send('testing 2');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
