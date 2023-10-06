import { Component, ViewChild } from '@angular/core';
import { Order, OrderQuery } from './interfaces/order.interface';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orders: Order[] = [];
  orderQuery: OrderQuery = {
    documentType: 'cc',
    documentNumber: '',
    orderId: ''
  };
  resetFormEvent = false;
  submitted = false;
  title = 'front-dashfleet-test';

  constructor(private ordersService: OrdersService) {}

  onSubmit() {
    this.resetFormEvent = false;
    this.getOrderById(this.orderQuery.orderId);
  }

  getOrderById(orderId: string) {
    this.ordersService.getOrderById(orderId).subscribe(
      (data: any) => {
        if (data[0].document !== this.orderQuery.documentNumber) {
          alert('El número de documento no coincide con el número en la orden');
          return;
        }
        const newData = data.map((order: any) => {
          return {
            ...order,
            delivery_date: order.delivery_date.split('T')[0]
          };
        });
        this.orders = newData;
        this.submitted = true;
      },
      (error: any) => {
        this.orders = [];
        alert('No se encontró la orden');
        this.resetForm();
      }
    );
  }

  resetForm() {
    this.resetFormEvent = true;
    this.submitted = false;
  }
}
