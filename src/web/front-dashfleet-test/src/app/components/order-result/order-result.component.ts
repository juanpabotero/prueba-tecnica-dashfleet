import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent {
  @Input() orders: any = [];
  @Output() resetFormEvent: EventEmitter<number> = new EventEmitter();

  resetForm() {
    this.resetFormEvent.emit();
  }
}
