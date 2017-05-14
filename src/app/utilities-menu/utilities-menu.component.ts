import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilities-menu',
  template: `
    <div><p>Utilities Menu</p></div>
    <md-card [routerLink]="['/parcelDebugger']">Debug Error Lane Parcels</md-card>
    <md-card [routerLink]="['/reprintLpn']">Reprint LPN</md-card>
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
export class UtilitiesMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
