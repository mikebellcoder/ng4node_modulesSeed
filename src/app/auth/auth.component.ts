import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { AuthService } from "app/shared/auth.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {  
data: any;
subscription$: any;
  constructor(public dialogRef: MdDialogRef<AuthComponent>, public as: AuthService) {    
   }

   authForm(valueObject){       
       this.subscription$ = Observable.of(this.as.isLoggedIn).do(async () => this.as.login(valueObject)).subscribe((value: boolean) => {
        //  setTimeout(() => {
           console.log(`Auth value is: ${value}.`);
               if (!this.as.isLoggedIn) {     
                 alert(`Wrong username or password!`);
               } else {
                 this.dialogRef.close();
               }
        //         }}
        // , 2000); 
       });           
   }

  ngOnInit() {}
  
  ngOnDestroy() {
    if(this.subscription$) {
    this.subscription$.unsubscribe();
    console.log(`unsubscribed from login form`)
    }
  }

}
