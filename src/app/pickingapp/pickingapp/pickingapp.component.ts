import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { CentralService } from "app/shared/central.service";
import { PickingService } from "app/pickingapp/picking.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { PickCriteria } from "app/pickingapp/models/pickingapp.models";

@Component({
  selector: 'app-pickingapp',
  templateUrl: './pickingapp.component.html',
  styleUrls: ['./pickingapp.component.css'],
  providers: [PickingService]
})
export class PickingappComponent implements OnInit, OnDestroy {

  constructor(private cs: CentralService, public el: ElementRef) { }
  
  ngOnInit() {    
    this.cs.appName(this.el, 'Picking App');
  }

  ngOnDestroy() {
    this.cs.resetAppName();
  }

}
