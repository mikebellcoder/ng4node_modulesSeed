import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MarklpnpickedRoutingModule } from './marklpnpicked-routing.module';
import { MarklpnpickedComponent } from './marklpnpicked/marklpnpicked.component';
import { MarklpnpickedService } from "app/marklpnpicked/marklpnpicked.service";

@NgModule({
  imports: [
    MarklpnpickedRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [MarklpnpickedComponent],
  providers: [MarklpnpickedService]  
})
export class MarklpnpickedModule { }
