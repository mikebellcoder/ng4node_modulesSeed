import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CentralService } from "app/shared/central.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CentralService],
  exports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule { }
