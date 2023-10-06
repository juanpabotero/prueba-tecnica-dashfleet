export class OrderController {
  constructor({ orderModel }) {
    this.orderModel = orderModel;
  }

  getOrders = async (req, res) => {
    const orders = await this.orderModel.getOrders();
    res.json(orders);
  };

  getByOrderId = async (req, res) => {
    const { id } = req.params;
    const order = await this.orderModel.getByOrderId({ id });
    if (order) return res.json(order);
    res.status(404).json({ message: 'order not found' });
  };
}
