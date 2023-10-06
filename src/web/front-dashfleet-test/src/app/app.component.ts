import { Component, ViewChild } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('orderForm', { static: false }) orderForm: any;
  title = 'front-dashfleet-test';
  submitted = false;
  documentTypes = [
    { value: 'cc', name: 'C.C.' },
    { value: 'di', name: 'D.I.' },
    { value: 'pasaporte', name: 'Pasaporte' }
  ];
  orderQuery = {
    documentType: 'cc',
    documentNumber: '',
    orderId: ''
  };
  orders: any = [];

  constructor(private ordersService: OrdersService) {}

  onSubmit() {
    this.getOrderById(this.orderQuery.orderId);
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  getOrderById(orderId: any) {
    this.ordersService.getOrderById(orderId).subscribe(
      (data: any) => {
        if(data[0].document !== this.orderQuery.documentNumber) {
          alert('El número de documento no coincide con el número de la orden');
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
    this.orderForm.reset({
      documentType: 'cc',
      documentNumber: '',
      orderId: ''
    });
    this.submitted = false;
  }
}
