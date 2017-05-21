import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from "app/shared/auth.service";
import { PickingService } from "app/pickingapp/picking.service";
import { BehaviorSubject, Observable } from "rxjs/Rx";

@Component({
  selector: 'app-pickscreen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pickscreen.component.html',
  styleUrls: ['./pickscreen.component.css']
})
export class PickscreenComponent implements OnInit {
pick$: Observable<any>;
subscription$: any;
  
  constructor(private as: AuthService, private src: PickingService) {}

  ngOnInit() {
    console.log(`pick screen created`);
    this.subscription$ = this.src.pick$.subscribe(data => {
      console.log(`this pick being created with:`, data);
      this.pick$ = Observable.of(data);
    });
  }

  ngOnDestroy() {    
    if(this.subscription$) {
      this.subscription$.unsubscribe();
      console.log('pick$ unsubscribed');
    }
  }

}
