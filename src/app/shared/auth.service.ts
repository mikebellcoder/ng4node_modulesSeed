import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from "environments/environment";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthService implements OnDestroy, OnInit {
public userCreds: any;
public isLoggedIn: boolean;
  constructor(private http: Http, private router: Router) {
    this.isLoggedIn = false;
   }

public login(creds): void {
  let enterOkay: boolean;
  console.log(`Auth Service logging in.`)
  if(!creds) {
    console.log(`No valid credentials.`)
    return;
  } else {
    let opts = new RequestOptions()
    opts.body = creds
   this.http.post(`${environment.nserver}/auth`, opts).map(r => r.json())
            .subscribe(data => {
              if (data.active == 'Y') {
              this.isLoggedIn = true;    
              sessionStorage.setItem('userName', data.userName);
              sessionStorage.setItem('accessLevel', data.accessLevel);
              sessionStorage.setItem('firstName', data.firstName);
              sessionStorage.setItem('active', data.active);    
              console.log(sessionStorage, this.isLoggedIn);
              enterOkay = true;              
            } else { 
              this.isLoggedIn = false
              console.log(`No valid credentials.`, this.isLoggedIn)
              enterOkay = false;   
            }  
            },
            err => console.log(err),
             () => {
               console.log(`login fired, enterOkay is: `, enterOkay)
              }
            );  
}
// returning value of enterOkay is not working. Comes across as undefined. = 22 May 2017
//return Observable.of(enterOkay);;
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
