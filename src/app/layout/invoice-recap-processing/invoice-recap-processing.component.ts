import { Component, OnInit } from '@angular/core';
import { InvoiceRecapProcessing } from '../shared/invoice-recap-processing.model';
import { InvoiceRecapProcessingService } from '../shared/invoice-recap-processing.service';

@Component({
  selector: 'app-invoice-recap-processing',
  templateUrl: './invoice-recap-processing.component.html',
  styleUrls: ['./invoice-recap-processing.component.scss']
})
export class InvoiceRecapProcessingComponent implements OnInit {

  display = false;
  invoiceProcessing: InvoiceRecapProcessing[];
  invoiceProcessingClone: InvoiceRecapProcessing[];
  colInvoiceRecapProcessing: any[];
  totalRecordInvoiceRecapProcessing: number;
  loading: boolean = false;
  constructor(private invoiceRecapProcessingService: InvoiceRecapProcessingService) { }

  ngOnInit() {
    this.setInvoiceRecapProcessingColumn();
    this.getInvoiceRecapProcessingData();
  }
  showDialog() {
    this.display = true;
  }
  setInvoiceRecapProcessingColumn() {
    this.colInvoiceRecapProcessing = [
      { field: 'salesCheck', header: 'Salescheck', index: 1 },
      { field: 'customerName', header: 'Customer Name', index: 2 },
      { field: 'phone', header: 'Phone #', index: 3 },
      { field: 'sellDate', header: 'Sell Date', index: 4 },
      { field: 'item', header: 'Item #', index: 5 },
      { field: 'contCost', header: 'Cont Cost', index: 6 },
      { field: 'costAdj', header: 'Cost Adj', index: 7 },
      { field: 'sellAdj', header: 'Sell Adj', index: 8 },
      { field: 'otherAdj', header: 'Other Adj', index: 9 },
      { field: 'permit', header: 'Permit', index: 10 },
      { field: 'delivery', header: 'Delivery', index: 11 },
      { field: 'totalSell', header: 'Total Sell', index: 11 },
      { field: 'margin', header: 'Margin%', index: 11 },
      { field: 'app', header: 'App', index: 11 },
      { field: 'cmts', header: 'Cmts', index: 11 },
    ];
  }
  getInvoiceRecapProcessingData() {
    this.invoiceRecapProcessingService.getInvoiceRecapProcessing().subscribe(response => {
      if (response) {
        debugger
        this.invoiceProcessing = response.data;
        this.totalRecordInvoiceRecapProcessing = this.invoiceProcessing.length;
      }
    },
      () => {

      },
      () => {

      });
  }
  loadInvoiceRecapProcessingLazy(event) {
    setTimeout(() => {
      if (this.invoiceProcessing) {
        this.invoiceProcessingClone = this.invoiceProcessing.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
