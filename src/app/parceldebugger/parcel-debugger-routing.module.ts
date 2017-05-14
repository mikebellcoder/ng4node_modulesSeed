import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParceldebuggerComponent } from './parceldebugger/parceldebugger.component';

const routes: Routes = [
  { path: '', component: ParceldebuggerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelDebuggerRoutingModule { }
