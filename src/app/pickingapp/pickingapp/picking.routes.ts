import { NgModule } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { PickingappComponent } from "app/pickingapp/pickingapp/pickingapp.component";
import { PickformComponent } from "app/pickingapp/pickingapp/pickform/pickform.component";
import { PickscreenComponent } from "app/pickingapp/pickingapp/pickscreen/pickscreen.component";


export const pickingRoutes: Routes = [
  {path: '', redirectTo: 'pickForm', pathMatch: 'full' },
  {path: 'pickForm', component: PickformComponent },
  {path: 'pickScreen', component: PickscreenComponent }  
];

