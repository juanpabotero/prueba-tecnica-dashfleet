import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = 'http://localhost:1234';

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${this.baseUrl}/orders`);
  }

  getOrderById(orderId: string) {
    return this.http.get(`${this.baseUrl}/orders/${orderId}`);
  }
}
