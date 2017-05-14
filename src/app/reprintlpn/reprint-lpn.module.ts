import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { ReprintLpnRoutingModule } from './reprint-lpn-routing.module';
import { ReprintlpnComponent } from './reprintlpn/reprintlpn.component';
import { CentralService } from 'app/shared/central.service';
import { ReprintLpnService } from './reprint-lpn.service';

@NgModule({
  imports: [
    CommonModule,
    ReprintLpnRoutingModule,    
    SharedModule    
  ],
  declarations: [ReprintlpnComponent],
  providers: [CentralService, ReprintLpnService]
})
export class ReprintLpnModule { }
