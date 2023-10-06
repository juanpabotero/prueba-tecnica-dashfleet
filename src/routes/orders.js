import { Router } from 'express';
import { OrderController } from '../controllers/orders.js';

export const createOrdersRouter = ({ orderModel }) => {
  const ordersRouter = Router();

  const orderController = new OrderController({ orderModel });

  ordersRouter.get('/', orderController.getOrders);

  ordersRouter.get('/:id', orderController.getByOrderId);

  return ordersRouter;
};
