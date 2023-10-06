import 'dotenv/config';
import express, { json } from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import { createOrdersRouter } from './routes/orders.js';

export const createApp = ({ orderModel }) => {
  const app = express();

  app.use(json());

  app.use(corsMiddleware());

  app.disable('x-powered-by');

  app.use('/orders', createOrdersRouter({ orderModel }));

  const PORT = process.env.PORT ?? 1234;

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
