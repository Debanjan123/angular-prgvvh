import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Constants } from '../shared/const/constant';
import { CommonService } from '../shared/services/common.service';
import { LoginReponse, User } from '../shared/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    invalidLoginMessage: string;
    isUnauthoried = false;
    loading = false;
    @ViewChild("username", { static: false }) usernameField: ElementRef;
    constructor(
        public router: Router,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private commonService: CommonService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    authorizeUser() {
        this.loading = true;
        this.loginService.authUser(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe((response) => {
            if (response) {
                debugger
                if (response.ResponseCode === '00') {
                    localStorage.setItem('isLoggedin', 'true');
                    let loginresponse = new LoginReponse();
                    loginresponse = response;
                    loginresponse.user = new User();
                    loginresponse.user.userId = this.loginForm.controls.username.value;
                    this.commonService.setGlobalVariables(Constants.currentUserObject, loginresponse);
                    this.router.navigate(['/salescheckinquiry']);
                }
                else {
                    this.isUnauthoried = true;
                    this.clearLoginForm();
                    this.invalidLoginMessage = response.ResponseCode;
                }
                this.loading = false;
            }
        },
            (err) => {
                this.isUnauthoried = true;
                this.clearLoginForm();
                this.invalidLoginMessage = err.error.messages;
                this.loading = false;
            },
            () => {

            });
    }

    
    clearLoginForm() {
        this.loginForm.controls.username.setValue('');
        this.loginForm.controls.password.setValue('');
        this.usernameField.nativeElement.focus();
    }
    forgotPassword() {

    }
}
