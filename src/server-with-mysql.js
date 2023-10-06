import { createApp } from './app.js';
import { OrderModel } from './models/mysql/order.js';

// se pasa el modelo que se quiere utilizar
createApp({ orderModel: OrderModel });
