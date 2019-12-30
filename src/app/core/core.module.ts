import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientHeader } from './services/http-header.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonService } from '../shared/services/common.service';
import { GlobalErrorHandler } from './services/exception.service';
const appInitializerFn = (appConfig: AppConfigService) => {
    return () => {
        return appConfig.loadAppConfig();
    };
};

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [HttpClientHeader, CommonService, MessageService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AppConfigService, {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            multi: true,
            deps: [AppConfigService]
        }],
    exports: [ToastModule],
})
export class CoreModule { }
