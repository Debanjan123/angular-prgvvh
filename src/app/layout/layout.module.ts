import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { SalesCheckInquiryComponent } from './sales-check-inquiry/sales-check-inquiry.component';
import { SalesCheckInquiryService } from './shared/sales-check-inquiry.service';
import { InvoiceRecapProcessingComponent } from './invoice-recap-processing/invoice-recap-processing.component';
import { InvoiceRecapProcessingService } from './shared/invoice-recap-processing.service';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        TableModule, FieldsetModule, DialogModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, SalesCheckInquiryComponent, InvoiceRecapProcessingComponent,
    ],
    providers: [SalesCheckInquiryService, InvoiceRecapProcessingService]
})
export class LayoutModule { }
