import express from 'express';
import cors from 'cors';

import { routes } from './routes';

function appFactory() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  return app;
}

export { appFactory };
