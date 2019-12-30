import { Component, OnInit } from '@angular/core';
import { SalesCheckInquiryService } from '../shared/sales-check-inquiry.service';
import { LazyLoadEvent } from 'primeng/api/public_api';

@Component({
    selector: 'app-sales-check-inquiry',
    templateUrl: './sales-check-inquiry.component.html',
    styleUrls: ['./sales-check-inquiry.component.scss']
})
export class SalesCheckInquiryComponent implements OnInit {
    // #region variables
    salesCheckInquiries: SalesCheckInquiry[];
    salesCheckInquiriesClone: SalesCheckInquiry[];
    contractorInvocies: ContactorInvoice[];
    contractorInvoicesClone: ContactorInvoice[];
    colsSci: any[];
    colsCi: any[];
    rows: any[];
    totalRecordsSci: number;
    totalRecordCi: number;
    loading: boolean;
    display = false;
    welcomeMsg = 'Welcome to Item Master - GUI';
    // #endregion variables
    constructor(private salesCheckInquiryService: SalesCheckInquiryService) {
    }
    // #region  life cycle event
    ngOnInit() {
        this.setColumsSalesCheckInquiry();
        this.getSalecCheckInquiryData();
        this.setColumnContractorInvoice();
        this.getContractorInvoiceData();    
    }
    // #end region  life cycle event
    // #region Methods
    setColumsSalesCheckInquiry() {
        this.colsSci = [
            { field: 'lineofBusiness', header: 'Line Of Business', index: 1 },
            { field: 'salesCheckNumber', header: 'Sales Check Number', index: 2 },
            { field: 'CustomerName', header: 'Customer Name', index: 3 },
            { field: 'itemNumber', header: 'Item Number', index: 4 },
            { field: 'sellDate', header: 'Sell Date', index: 5 },
            { field: 'completionDate', header: 'Completion Date', index: 6 },
            { field: 'rdPaidDate', header: 'R&D Paid Date', index: 7 },
            { field: 'cancelDate', header: 'Cancel Date', index: 8 },
            { field: 'archiveDate', header: 'Archive Date', index: 9 },
            { field: 'storeNumber', header: 'Store Number', index: 10 },
            { field: 'associateNumber', header: 'Associate Number', index: 11 },
        ];
    }

    getSalecCheckInquiryData() {
        this.salesCheckInquiryService.getSalesCheckActivity().subscribe(response => {
            if (response) {
                this.salesCheckInquiries = response.data;
                this.totalRecordsSci = this.salesCheckInquiries.length;
            }
        },
            () => {

            },
            () => {

            });
    }
    loadSalesCheckInquiryLazy(event: LazyLoadEvent) {
        setTimeout(() => {
            if (this.salesCheckInquiries) {
                this.salesCheckInquiriesClone = this.salesCheckInquiries.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
    }

    setColumnContractorInvoice() {
        this.colsCi = [
            { field: 'invoiceProcessDate', header: 'Invoice Process Data', index: 1 },
            { field: 'invoiceNumber', header: 'Invoice Number', index: 2 },
            { field: 'contractorName', header: 'Contractor Name', index: 3 },
            { field: 'contractorId', header: 'Contactor Id', index: 4 },
            { field: 'completionDate', header: 'Completion Date', index: 5 },
            { field: 'rdPaidDate', header: 'R&D Paid Date', index: 7 },
        ];

    }
    getContractorInvoiceData() {
        this.salesCheckInquiryService.getContractorInvoiceList().subscribe(response => {
            if (response) {
                this.contractorInvocies = response.data;
                this.totalRecordCi = this.contractorInvocies.length;
            }
        },
            () => {

            },
            () => {

            });
    }
    loadContractorInvoiceLazy(event: LazyLoadEvent) {
        setTimeout(() => {
            if (this.contractorInvocies) {
                this.contractorInvoicesClone = this.contractorInvocies.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
    }
    ShowDialog() {
        this.display = true;
    }
    // #endregion methods
}
