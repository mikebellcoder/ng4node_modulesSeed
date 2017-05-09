import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilities-menu',
  template: `
    <div><p>Utilities Menu</p></div>
    <md-card [routerLink]="['/reprintLpn']">Reprint LPN</md-card>
  `,
  styles: [`
  div {
  text-align: center;
  }
  `]
})
export class UtilitiesMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
