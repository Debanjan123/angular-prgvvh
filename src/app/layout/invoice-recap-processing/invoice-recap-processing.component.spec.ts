import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRecapProcessingComponent } from './invoice-recap-processing.component';

describe('InvoiceRecapProcessingComponent', () => {
  let component: InvoiceRecapProcessingComponent;
  let fixture: ComponentFixture<InvoiceRecapProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceRecapProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceRecapProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
