import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ParcelDebuggerRoutingModule } from './parcel-debugger-routing.module';
import { ParceldebuggerComponent } from './parceldebugger/parceldebugger.component';
import { ParcelDebuggerService } from "app/parceldebugger/parcel-debugger.service";
import { ReprintLpnService } from "app/reprintlpn/reprint-lpn.service";
import { DeliveryviewComponent } from './parceldebugger/deliveryview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ParcelDebuggerRoutingModule
  ],
  entryComponents: [DeliveryviewComponent],
  declarations: [ParceldebuggerComponent, DeliveryviewComponent],
  providers: [ParcelDebuggerService, ReprintLpnService]
})
export class ParcelDebuggerModule { }
