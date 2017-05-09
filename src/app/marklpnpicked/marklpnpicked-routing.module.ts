import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarklpnpickedComponent } from "app/marklpnpicked/marklpnpicked/marklpnpicked.component";

const routes: Routes = [
  {path: '', component: MarklpnpickedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarklpnpickedRoutingModule { }
