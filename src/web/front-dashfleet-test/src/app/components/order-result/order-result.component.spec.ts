import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResultComponent } from './order-result.component';

describe('OrderResultComponent', () => {
  let component: OrderResultComponent;
  let fixture: ComponentFixture<OrderResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderResultComponent]
    });
    fixture = TestBed.createComponent(OrderResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
