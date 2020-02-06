import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from './login-page/login.service';
const firebaseConfig = {
  apiKey: "AIzaSyAeG-jUl7yW_MLggch9iMkGEzPgkEx5WKM",
  authDomain: "angular-s4tzya.firebaseapp.com",
  databaseURL: "https://angular-s4tzya.firebaseio.com",
  projectId: "angular-s4tzya",
  storageBucket: "angular-s4tzya.appspot.com",
  messagingSenderId: "766308278725",
  appId: "1:766308278725:web:8fdac918d5909dec192bac",
  measurementId: "G-3TRK547CT7"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
