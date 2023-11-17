import express from 'express';

const app = express();

const staticMiddleware = express.static('public');

app.use(staticMiddleware, (req, res, next) => {
  console.log('Method: ', req.method);
  next();
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
