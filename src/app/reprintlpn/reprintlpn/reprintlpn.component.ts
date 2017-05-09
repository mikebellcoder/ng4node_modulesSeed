import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CentralService } from "app/shared/central.service";
import { ReprintLpnService } from '../reprint-lpn.service';
//import { MdSelect } from '@angular/material';

@Component({
  selector: 'app-reprintlpn',
  template: `
    <md-card>    

      <select placeholder="Reprint by:" #opt>
        <option value="Lpn">LPN</option>
        <option value="DeliveryId">Delivery Id</option>
        <option value="ItemCode">Item Code</option>
      </select>
    
    <md-card-content>
    Value: <md-input-container>
            <input mdInput type="text" #lpn>
         </md-input-container>
    </md-card-content>
    <md-card-actions align="end">
    <button md-raised-button (click)="reprint(opt.value, lpn.value)"
            color="primary">Print</button>
    </md-card-actions>
    </md-card>
    <button md-button id="back"
            color="accent" 
            [routerLink]="['/utilitiesMenu']">back to utilities menu</button>
  `,
  styles: [`
    md-card {
    max-width: 400px;
    color: black;
    margin: auto;
    margin-top: 0.5em;
  }
  input {
    width: 250px;
    font-size: 1.5rem;
    text-align: center;
  }
  #back {
    position: relative;
    left: 80px;   
  }
  `]
})
export class ReprintlpnComponent implements OnInit
{
  @ViewChild('lpn') lpnInput;
  displayHead: any;
  printLpn$: any;
  by: string
  opts = [
  {value: 'Lpn', viewValue: 'LPN'},
  {value: 'DeliveryId', viewValue: 'Delivery Id'},
  {value: 'ItemCode', viewValue: 'Item Code'},
  ];
  constructor(private srv: ReprintLpnService, private cs: CentralService, public el: ElementRef) { }

  ngOnInit()
  {
    console.log(this.cs.testString);
    this.cs.appName(this.el, 'Reprint LPN');
  }


  reprint(option: string, lpn: any)
  {
    this.printLpn$ = this.srv.reprint(option, lpn)
      .subscribe(
      data =>
      {
        alert(`Reprinted LPN: ${lpn}!`)
      },
      err =>
      {
        console.log(err.message)
        alert(err.message)
      },
      () =>
      {
        console.log(`Service executed MarkLpnPicked`)
        this.lpnInput.nativeElement.value = '';
      });
  }

  ngOnDestroy()
  {
    this.cs.resetAppName();
    if (this.printLpn$) {
      this.printLpn$.unsubscribe();
      console.log(`unsubscribed from pickLpn$`);
    }
  }

}
