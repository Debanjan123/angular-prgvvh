import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SalesCheckInquiryService {

  constructor(private httpClient: HttpClient) { }

  public getSalesCheckActivity(): Observable<SalesCheckInquiryList> {
    return this.httpClient.get('../../assets/json/salesAtivity.json').
    pipe(map(response => <SalesCheckInquiryList>response));
  }
  public getContractorInvoiceList(): Observable<ContractorInvoiceList> {
    return this.httpClient.get('../../assets/json/contractorInvoice.json').
    pipe(map(response => <ContractorInvoiceList>response));
  }
}
