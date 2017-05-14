import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CentralService } from "app/shared/central.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "app/shared/auth.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CentralService, AuthService],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule { }
