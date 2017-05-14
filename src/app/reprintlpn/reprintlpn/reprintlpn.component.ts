import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CentralService } from "app/shared/central.service";
import { ReprintLpnService } from '../reprint-lpn.service';

@Component({
  selector: 'app-reprintlpn',
  template: `
    
    <md-card>    
    
    <form #f="ngForm" (ngSubmit)="reprint(f.value)">
        <md-select placeholder="Reprint LPN By:" name="by" ngModel required>
          <md-option value="Lpn" >LPN</md-option>
          <md-option value="DeliveryId" >Delivery Id</md-option>
          <md-option value="ItemCode" >Item Code</md-option>
          <md-option value="Barcode" >Barcode</md-option>
        </md-select> 
    <md-card-content>
        <md-input-container>
            <input mdInput type="text"                            
              name="value"
              placeholder="Value"
              required
              ngModel #input>
         </md-input-container>
    </md-card-content>
    <md-card-actions align="end">
    <button md-raised-button type="submit"
            color="primary">Print</button>
    </md-card-actions>
    </form>
    </md-card>
    <button md-button id="back"
            color="accent" 
            [routerLink]="['/utilitiesMenu']">back to utilities menu</button>
  `,
  styles: [`
  md-select {
    margin-bottom: 1em;
  }
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
export class ReprintlpnComponent implements OnInit {
  @ViewChild('input') input;
  displayHead: any;
  printLpn$: any;
  by: string
  opts = [
  {value: 'Lpn', viewValue: 'LPN'},
  {value: 'DeliveryId', viewValue: 'Delivery Id'},
  {value: 'ItemCode', viewValue: 'Item Code'},
  {value: 'Barcode', viewValue: 'Barcode'},
  ];
  cities = ['Miami', 'Sao Paulo', 'New York'];
  constructor(private srv: ReprintLpnService, private cs: CentralService, public el: ElementRef) { }

  ngOnInit()
  {
    console.log(this.cs.testString);
    this.cs.appName(this.el, 'Reprint LPN');
  }


  reprint(value)  {
    if (!value.by || !value.value) { 
      alert(`Cannot pick empty values`)
      return;
    }
    console.log(`formValue:`)
    console.log(value)
    this.printLpn$ = this.srv.reprint(value)
      .subscribe(
      data =>
      {
        alert(`Reprinted LPN for value: ${value.value}!`)
      },
      err =>
      {
        console.log(err.message)
        alert(err.message)
      },
      () =>
      {
        console.log(`Service executed MarkLpnPicked`)
        this.input.nativeElement.value = '';
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
