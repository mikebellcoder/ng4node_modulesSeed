import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picking-menu',
  template: `
    <div><p>Picking Menu</p></div>    
    <md-card [routerLink]="['/stockPicking']">Stock Picking</md-card>
    <md-card [routerLink]="['/markLpnPicked']">Mark Lpn Picked </md-card>
  `,
  styles: [`
    div {
  text-align: center;
}
  md-card {
    margin-bottom: 0.5em;
  }

  `]
})
export class PickingMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
