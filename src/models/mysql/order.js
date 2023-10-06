import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// crear la conexion
const config = process.env.DATABASE_URL ?? DEFAULT_CONFIG;
const connection = await mysql.createConnection(config);

export class OrderModel {
  static async getOrders() {
    const [orders] = await connection.query(
      `SELECT orders.order_id, state, direction, delivery_date, document, client_name, product_id, product_name, ref, quantity
      FROM orders
      JOIN clients ON orders.order_id = clients.order_id
      JOIN products ON orders.order_id = products.order_id;`
    );

    if (orders.length === 0) return [];

    return orders;
  }

  static async getByOrderId({ id }) {
    const [orders] = await connection.query(
      `SELECT orders.order_id, state, direction, delivery_date, document, client_name, product_id, product_name, ref, quantity
      FROM orders
      JOIN clients ON orders.order_id = clients.order_id
      JOIN products ON orders.order_id = products.order_id
      WHERE orders.order_id = ?;`,
      [id]
    );

    if (orders.length === 0) return null;

    return orders;
  }
}
