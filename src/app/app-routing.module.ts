import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickingMenuComponent } from './picking-menu/picking-menu.component';
import { AppComponent } from "app/app.component";
import { MainMenuComponent } from "app/main-menu/main-menu.component";
import { UtilitiesMenuComponent } from 'app/utilities-menu/utilities-menu.component';
import { LoggedInGuard } from './loggedin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'mainMenu', pathMatch: 'full'},
  {path: 'mainMenu', component: MainMenuComponent},
  {path: 'pickingMenu', component: PickingMenuComponent, canActivate: [ LoggedInGuard ]},
  {path: 'stockPicking', loadChildren: 'app/pickingapp/pickingapp.module.ts#PickingappModule'},
  {path: 'markLpnPicked', loadChildren: 'app/marklpnpicked/marklpnpicked.module.ts#MarklpnpickedModule'},
  {path: 'utilitiesMenu', component: UtilitiesMenuComponent, canActivate: [ LoggedInGuard ]},
  {path: 'parcelDebugger', loadChildren: 'app/parceldebugger/parcel-debugger.module.ts#ParcelDebuggerModule'},
  {path: 'reprintLpn', loadChildren: 'app/reprintlpn/reprint-lpn.module.ts#ReprintLpnModule'},
  {path: '**', redirectTo: 'mainMenu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoggedInGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
