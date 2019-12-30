import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable()
export class HttpClientHeader {

    constructor(private httpclient: HttpClient, private commonService: CommonService) { }

    createAuthorizationHeader(anonymous: boolean) {
        return this.commonService.getHeaders(anonymous);
    }
    
    getAuth(url, userName, password) {
        let headers = new HttpHeaders();
        headers = this.commonService.getAuthHeaders(userName, password);
        return this.httpclient.get(url, { headers: headers });
    }

    get(url, params?, anonymous?) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(anonymous);
        return this.httpclient.get(url, { headers: headers, params: params });
    }

    post(url, data, anonymous?) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(anonymous);
        return this.httpclient.post(url, data, {
            headers: headers
        });
    }
    put(url, data, anonymous?) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(anonymous);
        return this.httpclient.put(url, data, {
            headers: headers
        });
    }
    patch(url, data, anonymous?) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(anonymous);
        return this.httpclient.patch(url, data, {
            headers: headers
        });
    }
    delete(url, anonymous?) {
        let headers = new HttpHeaders();
        headers = this.createAuthorizationHeader(anonymous);
        return this.httpclient.delete(url, {
            headers: headers
        });
    }
}
