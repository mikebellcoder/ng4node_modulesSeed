import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickingappRoutingModule } from './pickingapp-routing.module';
import { PickingappComponent } from './pickingapp/pickingapp.component';
import { SharedModule } from "app/shared/shared.module";
import { PickformComponent } from './pickingapp/pickform/pickform.component';
import { PickscreenComponent } from './pickingapp/pickscreen/pickscreen.component';
import { PickTypeSelectionComponent } from './pickingapp/pickform/pick-type-selection.component';
import { PickForSelectionComponent } from './pickingapp/pick-for-selection.component';
import { PickUsingSelectionComponent } from './pickingapp/pick-using-selection.component';
import { PickLocationSelectionComponent } from './pickingapp/pick-location-selection.component';
import { PickingService } from './picking.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PickingappRoutingModule
  ],
  //providers: [PickingService],
  declarations: [PickingappComponent, PickformComponent, PickscreenComponent, PickTypeSelectionComponent, PickForSelectionComponent, PickUsingSelectionComponent, PickLocationSelectionComponent]
})
export class PickingappModule { }
