import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickingappComponent } from './pickingapp/pickingapp.component';
import { pickingRoutes } from './pickingapp/picking.routes';


const routes: Routes = [
  { path: '', component: PickingappComponent, children: pickingRoutes }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickingappRoutingModule { }
