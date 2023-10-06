import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { OrderQuery } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnChanges {
  @Input() orderQuery: OrderQuery = {
    documentType: 'cc',
    documentNumber: '',
    orderId: ''
  };
  @Input() resetFormEvent: boolean = false;
  @Output() onSubmitEvent: EventEmitter<number> = new EventEmitter();
  @ViewChild('orderForm', { static: false }) orderForm: any;
  documentTypes = [
    { value: 'cc', name: 'C.C.' },
    { value: 'di', name: 'D.I.' },
    { value: 'pasaporte', name: 'Pasaporte' }
  ];

  ngOnChanges() {
    if (this.resetFormEvent) {
      this.resetForm();
      this.resetFormEvent = false;
    }
  }

  onSubmit() {
    this.onSubmitEvent.emit();
  }

  resetForm() {
    this.orderForm.reset({
      documentType: 'cc',
      documentNumber: '',
      orderId: ''
    });
  }
}
