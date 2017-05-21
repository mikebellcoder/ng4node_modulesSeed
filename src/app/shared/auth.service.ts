import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from "environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class AuthService implements OnDestroy, OnInit {
public userCreds: any;
public isLoggedIn: boolean;
  constructor(private http: Http, private router: Router) {
    this.isLoggedIn = false;
   }

login(creds): boolean {
  console.log(`Auth Service logging in.`)
  if(!creds) {
    return;
  } else {
    let opts = new RequestOptions()
    opts.body = creds
  this.http.post(`${environment.nserver}/auth`, opts)
  .map(r => r.json())
  .subscribe(data => {
    this.isLoggedIn = true;    
    sessionStorage.setItem('userName', data.userName);
    sessionStorage.setItem('accessLevel', data.accessLevel);
    sessionStorage.setItem('firstName', data.firstName);
    sessionStorage.setItem('active', data.active);    
    console.log(sessionStorage);    
  });  
  this.router.navigate(['mainMenu']);
  }
}


ngOnInit() {
  console.log(`Auth Service being Created.`)
}

logout() {
  console.log(`log out button pressed.`)
  sessionStorage.clear();
  this.isLoggedIn = false;
  this.routeBack();
}

getUserName(): string {
  return sessionStorage.getItem('userName');
} 

routeBack() {
  console.log(`Not logged in.`)
  this.router.navigate(['/mainMenu']);
}

ngOnDestroy() {
  console.log(`Auth Service being Destroyed.`)
  //this.logout();
}

}


export const AUTH = [
  { provide: AuthService, useClass: AuthService }
];
