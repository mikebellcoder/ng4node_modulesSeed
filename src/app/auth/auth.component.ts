import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {  
data: any;
  constructor(public dialogRef: MdDialogRef<AuthComponent>) {    
   }

   authForm(valueObject){     
       this.dialogRef.close(valueObject);            
   }

  ngOnInit() {}

}
