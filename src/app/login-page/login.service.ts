import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLoginRequest, UserLoginResponse } from './authentication';
import * as md5 from 'js-md5';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/firestore';

// const base = 'http://localhost:3000';
const base = '';

@Injectable()
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore,
    public auth: AngularFireAuth,
  ) { }
  nonce(): Observable<string> {
    return of((new Date().getTime() / 60000).toFixed(0));
  }
  login(userLogin: UserLoginRequest): Observable<string> {
    
    const hash = md5.create();
    hash.update(`${base}/user/login/${JSON.stringify(userLogin)}`);
    return of(hash.hex());
    /// return this.httpClient.post<UserLoginResponse>(
    ///   `${base}/user/login`,
    ///   {
    ///     body: userLogin
    ///   }
    /// );
  }
  logout(userLogin: UserLoginRequest): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>(
      `${base}/user/logout`,
      {
        body: userLogin
      }
    );
  }

}