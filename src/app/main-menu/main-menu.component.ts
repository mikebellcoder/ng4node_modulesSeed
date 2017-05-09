import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  template: `
    <md-card [routerLink]="['/pickingMenu']">Picking Menu</md-card>
    <md-card [routerLink]="['/utilitiesMenu']">Utilities Menu</md-card>
  `,
  styles: [`
  md-card {
    margin-top: 0.5em;
  }
  `]
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
