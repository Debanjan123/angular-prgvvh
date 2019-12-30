import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvoiceRecapProcessingList } from './invoice-recap-processing.model';

@Injectable()
export class InvoiceRecapProcessingService {

  constructor(private httpClient: HttpClient) { }

  public getInvoiceRecapProcessing(): Observable<InvoiceRecapProcessingList> {
    return this.httpClient.get('../../assets/json/invoicerecapprocessing.json').
    pipe(map(response => <InvoiceRecapProcessingList>response));
  }
}
