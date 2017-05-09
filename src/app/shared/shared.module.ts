import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CentralService } from "app/shared/central.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule    
  ],
  providers: [CentralService],
  exports: [MaterialModule],
  declarations: []
})
export class SharedModule { }
