import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors()); // permitir o front-end com o back-end
app.use(express.json());
app.use(routes);

const door = 3333;
app.listen(door, () => {
  console.log(`Server runing on ${door}...`);
});
