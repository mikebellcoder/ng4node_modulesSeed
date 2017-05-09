import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picking-menu',
  template: `
    <div><p>Picking Menu</p></div>
    <md-card [routerLink]="['/markLpnPicked']">Mark Lpn Picked </md-card>
  `,
  styles: [`
  div {
  text-align: center;
  }
  `]
})
export class PickingMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
