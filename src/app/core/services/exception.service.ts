
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalErrorLog } from '../../shared/models/global_errorlog.model';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
    errorList: GlobalErrorLog[] = [];
    errorModel = new GlobalErrorLog();
    docPath: any;
    constructor(private injector: Injector) {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        super();
    }

    handleError(error) {
        const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.error('Response body:', error.message);
        } else {
            // A client-side or network error occurred.
            if (error.message && !error.message.includes('offsetWidth')) {
                console.error('An error occurred:', error.message);
            }
        }
        if (error.message && !error.message.includes('offsetWidth')) {
            this.errorModel.errorMessage = error.message;
            this.errorModel.errorRoutePage = router.url;
            this.errorModel.errorStack = error.stack;
            this.errorList.push(this.errorModel);
            super.handleError(error);
        }
        // this.saveLogFile();
    }
    saveLogFile(): void {
        // const documents = knownFolders.currentApp();
        // this.docPath =  documents ;
        // saveAs(new Blob(this.errorList, { type: 'text' }), 'data.log');
    }
}
