import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { PickCriteria } from '../../models/pickingapp.models';
import { PickingService } from "app/pickingapp/picking.service";

@Component({
  selector: 'app-pickform',
  templateUrl: './pickform.component.html',
  styleUrls: ['./pickform.component.css']
})
export class PickformComponent implements OnInit, OnDestroy {
  pickCriteria$: BehaviorSubject<PickCriteria>;
  subscription$: Subscription;
  constructor(@Inject(PickingService) public srv: PickingService) { }

  addCriteria(value) {
    let v = Object.keys(value)[0];    
    console.log(`switch received: `, v)
    switch(v) {    
    case 'pickType':
    this.srv.next(Object.assign(this.srv.default, {pickType: value.pickType}));
    console.log('switch case: pickType',this.srv.pickCriteriaValue());    
    break;
    case 'for':    
    this.srv.next(Object.assign(this.srv.default, {pickFor: value}));
    console.log('switch case: for',this.srv.pickCriteriaValue());    
    break;
    case 'using':    
    this.srv.next(Object.assign(this.srv.default, {pickUsing: value}));
    console.log('switch case using',this.srv.pickCriteriaValue());    
    break;
    case 'location':    
    this.srv.next(Object.assign(this.srv.default, {pickLocation: value}));
    console.log('switch case location',this.srv.pickCriteriaValue());
    break;
    default: 
    console.log('Switch produced no changes');
    break;
    }
}
  ngOnInit() {    
    //this.pickCriteria$ = this.srv.pickCriteria$;
  }  
  ngOnDestroy() {
    if(this.subscription$) {
      this.subscription$.unsubscribe();
      console.log(`unsubscribed from pickCriteria$`);
    }
  }

  startPicking() {    
          this.srv.startPicking()    
  }
}
