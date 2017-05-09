import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickingMenuComponent } from './picking-menu/picking-menu.component';
import { AppComponent } from "app/app.component";
import { MainMenuComponent } from "app/main-menu/main-menu.component";
import { UtilitiesMenuComponent } from 'app/utilities-menu/utilities-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainMenu', pathMatch: 'full'},
  {path: 'mainMenu', component: MainMenuComponent},
  {path: 'pickingMenu', component: PickingMenuComponent},
  {path: 'markLpnPicked', loadChildren: 'app/marklpnpicked/marklpnpicked.module.ts#MarklpnpickedModule'},
  {path: 'utilitiesMenu', component: UtilitiesMenuComponent},
  {path: 'reprintLpn', loadChildren: 'app/reprintlpn/reprint-lpn.module.ts#ReprintLpnModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
