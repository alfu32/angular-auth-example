import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase  from '@firebase/app';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
    </ng-template>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
  ngOnInit() {}
  // loginStream: ReplaySubject<string> = new ReplaySubject<string>();
  // login: string;
  // name = 'Angular';
  // ngOnInit() {
  //   this.loginStream.subscribe(
  //     v => {
  //       console.log(v);
  //       this.login = v
  //     }
  //   )
  // }
}
