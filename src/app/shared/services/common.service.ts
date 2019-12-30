import { Injectable } from '@angular/core';
import { AppConfigService } from '../../app-config.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Constants } from '../const/constant';
import { LoginReponse } from '../models/login.model'
declare var $: any;

@Injectable()
export class CommonService {
    //#region variables
    //#endregion variables
    //#region Constructor
    constructor(
        private appConfigService: AppConfigService,
        private router: Router
    ) {
    }
    //#endregion Constructor
    //#region configuration, local storage, session storage, encryption methos
    getConfiguration() {
        let apiEndPoint = null;
        apiEndPoint = this.appConfigService.getConfig();
        return apiEndPoint;
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    clearSessionStorage() {
        sessionStorage.clear();
    }
    getGlobalVariables(key) {
        const keyDecrypt = this.getEncryptionKey();
        const cipherText = localStorage.getItem(key);
        if (!cipherText) {
            return null;
        }
        if (keyDecrypt) {
            const bytes = CryptoJS.AES.decrypt(cipherText.toString(), keyDecrypt);
            const plainText = bytes.toString(CryptoJS.enc.Utf8);
            return plainText;
        } else {
            return localStorage.getItem(key);
        }
        // return localStorage.getItem(key);
    }
    setSessionStorage(key, value) {
        // this.clearSessionStorage();
        const keyEncrypt = this.getEncryptionKey();
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        } else if (value) {
            value = value.toString();
        }
        if (keyEncrypt) {
            const cipherText = CryptoJS.AES.encrypt(value, keyEncrypt);
            sessionStorage.setItem(key, cipherText.toString());
        } else {
            sessionStorage.setItem(key, value);
        }
    }
    getSessionStorage(key) {
        const keyDecrypt = this.getEncryptionKey();
        const cipherText = sessionStorage.getItem(key);
        if (!cipherText) {
            return null;
        }
        if (keyDecrypt) {
            const bytes = CryptoJS.AES.decrypt(cipherText.toString(), keyDecrypt);
            try {
                return bytes.toString(CryptoJS.enc.Utf8);
            } catch (e) {
                return '';
            }
        } else {
            return sessionStorage.getItem(key);
        }
    }
    clearSessionStorageByKey(key: string) {
        sessionStorage.removeItem(key);
    }
    getEncryptionKey() {
        const key = localStorage.getItem('key');
        if (key) {
            return key;
        }
        return '';
    }
    generateKey() {
        if (!this.getEncryptionKey()) {
            const code = Math.random().toString();
            if (!code) {
                return;
            }
            const salt = CryptoJS.lib.WordArray.random(128 / 8);
            localStorage.setItem('key', CryptoJS.PBKDF2(code, salt, { keySize: 512 / 32, iterations: 1000 }));
        }
    }
    setGlobalVariables(key, value) {
        const keyEncrypt = this.getEncryptionKey();
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        } else if (value) {
            value = value.toString();
        }
        if (keyEncrypt) {
            const cipherText = CryptoJS.AES.encrypt(value, keyEncrypt);
            localStorage.setItem(key, cipherText.toString());
        } else {
            localStorage.setItem(key, value);
        }
        // localStorage.setItem(key, value);
    }
    getHeaders(anonymous: boolean) {
        if (!anonymous && this.getGlobalVariables(Constants.currentUserObject) == null) {
            this.router.navigate(['/login']);
        } else {
            const currentUserObject: LoginReponse = JSON.parse(this.getGlobalVariables(Constants.currentUserObject));
            let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/json');
            headers = headers.append('Accept', 'application/json');
            headers = headers.append('Access-Control-Allow-Origin', '*');
            headers = headers.append('Access-Control-Allow-Credentials', 'true');
            if (anonymous === undefined) {
                headers = headers.append('Authorization', 'Bearer ' + currentUserObject.token);
            }
            return headers;
        }
    } 
    getAuthHeaders(userName: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Credentials', 'true');
        headers = headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));
        return headers;
    }
}
