import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickingMenuComponent } from './picking-menu/picking-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import { UtilitiesMenuComponent } from './utilities-menu/utilities-menu.component';
import { AuthComponent } from './auth/auth.component';
import { AUTH } from "app/shared/auth.service";
import { TestComponent } from './test.component';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    PickingMenuComponent,
    MainMenuComponent,
    UtilitiesMenuComponent,
    AuthComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AuthComponent],
  providers: [AUTH, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
