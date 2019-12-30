export class InvoiceRecapProcessingList {
    data: InvoiceRecapProcessing[];
}
export class InvoiceRecapProcessing {
    salesCheck: string;
    customerName: string;
    phone: string;
    sellDate: string;
    item: string;
    contCost: string;
    costAdj: string;
    sellAdj: string;
    otherAdj: string;
    permit: string;
    delivery: string;
    totalSell: string;
    margin: string;
    app: string;
    cmts: string;
}