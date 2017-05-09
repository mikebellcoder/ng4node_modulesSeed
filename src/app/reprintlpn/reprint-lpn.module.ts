import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ReprintLpnRoutingModule } from './reprint-lpn-routing.module';
import { ReprintlpnComponent } from './reprintlpn/reprintlpn.component';
import { CentralService } from 'app/shared/central.service';
import { ReprintLpnService } from './reprint-lpn.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [    
    ReprintLpnRoutingModule,
    FormsModule,
    SharedModule    
  ],
  declarations: [ReprintlpnComponent],
  providers: [CentralService, ReprintLpnService]
})
export class ReprintLpnModule { }
