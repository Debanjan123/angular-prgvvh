
class SalesCheckInquiryList {
    data: SalesCheckInquiry[];
}
class SalesCheckInquiry {
    lineofBusiness: string;
    salesCheckNumber: number;
    CustomerName: string;
    customerPhoneNumber: string;
    itemNumber: number;
    sellDate: string;
    completionDate: string;
    rdPaidDate: string;
    cancelDate: string;
    archiveDate: string;
    storeNumber: number;
    associateNumber: number;
}
class ContractorInvoiceList {
    data: ContactorInvoice[];
}
class ContactorInvoice {
    invoiceProcessDate: string;
    invoiceNumber: number;
    contractorName: string;
    contractorId: string;
    completionDate: string;
    rdPaidDate: string;
}
