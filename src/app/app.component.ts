import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  loginStream: ReplaySubject<string> = new ReplaySubject<string>();
  login: string;
  name = 'Angular';
  ngOnInit() {
    this.loginStream.subscribe(
      v => {
        console.log(v);
        this.login = v
      }
    )
  }
}
