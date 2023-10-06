export interface Order {
  order_id: number;
  state: string;
  direction: string;
  delivery_date: Date;
  document: number;
  client_name: string;
  product_id: number;
  product_name: string;
  ref: string;
  quantity: number;
}

export interface OrderQuery {
  documentType: string;
  documentNumber: string;
  orderId: string;
}
