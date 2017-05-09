import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReprintlpnComponent } from 'app/reprintlpn/reprintlpn/reprintlpn.component';

const routes: Routes = [
  { path: '', component: ReprintlpnComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReprintLpnRoutingModule { }
