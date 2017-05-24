import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { AuthComponent } from "app/auth/auth.component";
import { AuthService } from "app/shared/auth.service";

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

  constructor(public dialog: MdDialog, public as: AuthService) { }

ngOnInit() {
  if(sessionStorage.getItem('active') == 'Y') {
    return;
  } else {
  this.openDialog();
  }
  }

openDialog() {
    let dialogRef = this.dialog.open(AuthComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(console.log);
  }

}
