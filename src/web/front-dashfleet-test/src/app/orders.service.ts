import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = 'http://localhost:1234';

  constructor(private http: HttpClient) {}

  getOrderById(orderId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/orders/${orderId}`);
  }
}
