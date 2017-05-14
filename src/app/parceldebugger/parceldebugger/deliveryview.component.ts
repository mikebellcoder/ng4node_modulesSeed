import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-deliveryview',
  template: `
  <h3 md-dialog-title>Delivery Id: {{ deliveryId || 'None to Show'}}</h3>
    <div class="table" md-dialog-content>
    <b>Is Fully Picked:</b> {{ fullyPicked || 'No data'}}
    <br>
    <b>Is Fully Shipped:</b> {{ fullyShipped || 'No data'}}
    <br>
    <b>Items Left:</b>          
    <span *ngFor="let datum of deliveryArray">
    <br>{{ datum['items_left'] }}, Qty: {{ datum['number_boxes']}}
    </span>
  `,
  styles: [`
    md-dialog-container {
      padding: 5px;
      width: 360px !important;
    }
  `],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DeliveryviewComponent implements OnInit {
deliveryId: string;
fullyPicked: string;
fullyShipped: string;
deliveryArray: any;
deliveryData: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(public dialogRef: MdDialogRef<DeliveryviewComponent>) {}

  //this.dialogRef.close(this.value)

  ngOnInit() {}

}
