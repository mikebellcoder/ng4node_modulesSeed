import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, } from '@angular/core';
import { AuthService } from "app/shared/auth.service";
import { PickingService } from "app/pickingapp/picking.service";
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pick, testPick } from '../../models/pickingapp.models';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pickscreen',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './pickscreen.component.html',
  styleUrls: ['./pickscreen.component.css']
})
export class PickscreenComponent implements OnInit, OnDestroy {
blank: string = '';
picks: Pick;
subscription$: any;
pickingForm: FormGroup;
userId: string 
  
  constructor(private as: AuthService, private src: PickingService, 
  private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    console.log(`fired init`)
    this.createPickScreen();
  }

  ngOnDestroy() {    
    if(this.subscription$) {
      this.subscription$.unsubscribe();
      console.log('pick$ unsubscribed');
    }
  }

  createPickScreen() {
console.log(`pick screen created`);    
    this.subscription$ = this.src.pick$.subscribe(data => {
    console.log(`this pick being created with:`, data);
    if (!data[0].item_code) { 
      this.picks = testPick
    }else {      
      this.picks = new Pick(data[0]);
    }
     });
    this.pickingForm = this.fb.group({
      'item': ['', Validators.required],
      'location': ['', Validators.required],
      'quantity': ['', Validators.required],
      'userId': [this.as.getUserName(), Validators.required]
    });    
    console.log(`Pick Screen shows: `, this.picks);
  }

  confirmSection(inputObj: any) {

    console.log(inputObj.criteria);
    console.log(inputObj.value);
    console.log(this.pickingForm)
  }

  pick(formValue) {
    console.log(`TS form:`,this.pickingForm)
    console.log(`HTML Form`,formValue)
    this.src.postPick(formValue);    
  }

}
