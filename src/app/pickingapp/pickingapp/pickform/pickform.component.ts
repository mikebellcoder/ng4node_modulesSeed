import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';


interface PickCriteria {
  pickType: string[],
  pickFor: object,
  pickUsing: object,
  pickLocation: object
}

@Component({
  selector: 'app-pickform',
  templateUrl: './pickform.component.html',
  styleUrls: ['./pickform.component.css']
})
export class PickformComponent implements OnInit, OnDestroy {
  default: PickCriteria = {pickType: ['all'], pickFor: {for: 'all', val: 0}, pickUsing: {using: 'all'}, pickLocation: {location:'all'}};
  pickCriteria: PickCriteria;
  pickCriteria$: BehaviorSubject<PickCriteria>;
  subscription$: Subscription;
  constructor() { }

  addCriteria(value) {
    let v = Object.keys(value)[0];    
    console.log(`switch received: `, v)
    switch(v) {    
    case 'pickType':
    this.pickCriteria$.next(Object.assign(this.default, {pickType: value.pickType}));
    console.log('switch case: pickType',this.pickCriteria$.getValue());    
    break;
    case 'for':    
    this.pickCriteria$.next(Object.assign(this.default, {pickFor: value}));
    console.log('switch case: for',this.pickCriteria$.getValue());    
    break;
    case 'using':    
    this.pickCriteria$.next(Object.assign(this.default, {pickUsing: value}));
    console.log('switch case using',this.pickCriteria$.getValue());    
    break;
    case 'location':    
    this.pickCriteria$.next(Object.assign(this.default, {pickLocation: value}));
    console.log('switch case location',this.pickCriteria$.getValue());
    break;
    default: 
    console.log('Switch produced no changes');
    break;
    }
}
  ngOnInit() {    
    this.pickCriteria$ = new BehaviorSubject<PickCriteria>(this.default);
  }  
  ngOnDestroy() {
    if(this.subscription$) {
      this.subscription$.unsubscribe();
      console.log(`unsubscribed from pickCriteria$`);
    }
  }

  startPicking() {
    this.subscription$ = this.pickCriteria$
              //.pluck('pickType')
              //.map((pc) => pc.pickType.toString())
              //.filter((value, i) => value[i].pickType[i] == 'FB')
              .subscribe((pc: PickCriteria) => {
                console.log(pc);
                alert(pc.pickType.toString());
              });        
    //console.log(`pickCriteria:`, this.pickCriteria);    
    //alert(`Pick Criteria: ${JSON.stringify(this.pickCriteria)}`);
  }
}
