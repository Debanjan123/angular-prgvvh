import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
import { HttpClientHeader } from '../../core/services/http-header.service';
import { LoginReponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  cssApiEndPoint = '';
  constructor(private httpClient: HttpClientHeader, private commonService: CommonService) {
    const appConfiguration = this.commonService.getConfiguration();
    if (appConfiguration) {
      this.cssApiEndPoint = appConfiguration.cssApiEndPoint;
    }
  }

  public authUser(userName: string, password: string) {
    return this.httpClient.getAuth(this.cssApiEndPoint + 'HSSOMAuthService/services/auth/token?attributes=mail,title,cn,sn,shcdisplayname', userName, password)
      .pipe(map((response => <LoginReponse>response)));
  }
}
