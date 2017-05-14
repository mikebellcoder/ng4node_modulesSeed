import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
isLoggedIn: boolean;
constructor(private as: AuthService) {
}

logOut() {  
  this.as.logout();
}

checkLogin() {
  console.log(`checking login`);
  let booVal = sessionStorage.getItem('active') == 'Y'? true : false;
  this.as.isLoggedIn = booVal;
}

ngOnInit() {
  this.checkLogin();
}

ngOnDestroy() {
  console.log('app.component destroyed')
}

ngOnChanges(){
  this.checkLogin();
}



}

