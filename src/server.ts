import express, { Application } from 'express';
import { UserController } from './controllers';

// Create a new express application instance
const app: Application = express();

app.use('/', UserController);

app.get('/', async (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
