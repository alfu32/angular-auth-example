import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from './login.service';
import { UserLogin, UserLoginResponse } from './authentication';
import { ReplaySubject } from 'rxjs';
import * as md5 from 'js-md5';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginPageTitle = 'Default Login Page Title';
  @Input() succes = new ReplaySubject<string>();
  @Input() error = new ReplaySubject<UserLoginResponse>();

  login: UserLogin = {
    username: null,
    password: null,
    nonce: null,
  }

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  sendAuth(){
    this.loginService.nonce().subscribe(
      n => {
        this.login.nonce = n;
        console.log(md5);
        const hash = md5.create();
        hash.update(JSON.stringify(this.login));
        this.loginService.login({hash: hash.hex() })
        .subscribe(
          (result) => {
            this.succes.next(result);
          },
          (error) => {

          },
          () => {},
        );
      }
    );
  }

}