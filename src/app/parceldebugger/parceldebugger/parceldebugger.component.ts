import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CentralService } from "app/shared/central.service";
import { ParcelDebuggerService } from '../parcel-debugger.service';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';
import { ReprintLpnService } from "app/reprintlpn/reprint-lpn.service";
import {MdDialog, MdDialogRef} from '@angular/material';
import { DeliveryviewComponent } from "app/parceldebugger/parceldebugger/deliveryview.component";

@Component({
  selector: 'app-reprintlpn',
  template: `
    
    <md-card>    
    <md-card-header *ngIf="!showResult">
    <h4>Enter an LPN or Barcode<br>  
    from CASI Error Lane</h4>
    </md-card-header>
    <form #f="ngForm" (ngSubmit)="getDebugData($event,f.value);">        
    <md-card-content>
        <span *ngIf="!showResult">
        <md-input-container>
        <span mdPrefix>VALUE:</span>
                <input mdInput                  
                  type="text"                            
                  name="value"              
                  required
                  focused
                  ngModel #input>
               </md-input-container>
         </span>
         <div class="result" *ngIf="showResult">
         <b>RESULTS:</b>
         <hr>
         <div class="details">
         <b>Item Code:</b><br>{{ debugObject$.value['item_code'] }}<br>
         <b>Descrition:</b><br>{{ debugObject$.value['description'] }}<br>
         <b>From Locator:</b><br>{{ debugObject$.value['from_locator_code'] }}<br>
         <b>Ship to Name:</b><br>{{ debugObject$.value['ship_to_name'] }}<br>
         
         <table>
           <tr>
           <th><b>LPN:</b></th>
           <th class="textButton" (click)="openDialog()"><b>Delivery ID:</b></th>
           <th><b>Picked by:</b></th>
           </tr>
           <tr>
             <td>{{ debugObject$.value['lpn'] }}</td>
             <td> {{ debugObject$.value['delivery_id'] }}</td>
             <td> {{ debugObject$.value['picked_by'] }}</td>
           </tr>
          
           <tr>
           <th><b>Barcode1:</b></th>
           <th><b>Barcode2:</b></th>
           <th><b>Tracking Number:</b></th>
           </tr>
           <tr>
             <td>{{ debugObject$.value['barcode1'] }}</td>
             <td> {{ debugObject$.value['barcode2'] }}</td>
             <td> {{ debugObject$.value['tracking_number'] }}</td>
           </tr>
          </table>
         <b>Result of item run:</b>  {{ debugObject$.value['isshipped'] || 'None'}}<br>
         <b>Casi Errors:</b> {{debugObject$.value['rejectmsg'] || 'None'}}
         <br>
         <b>Ship Method:</b> {{debugObject$.value['casi_ship_method'] }}         
         </div>         
         <hr>
         <b>SUGGESTED HANDLING:</b>
         <h4>{{ debugObject$.value['result_message'] }}</h4><br>
         </div>
    </md-card-content>
    <md-card-actions align="end">
    <button md-raised-button 
            class="resultButtons"
            *ngIf="showResult"
            (click)="getDebugData($event,{ value: previous, prevent: true})"
            style="background-color: green; color: white">Refresh</button>
    <button md-raised-button 
            class="resultButtons"
            *ngIf="showResult"
            (click)="$event.preventDefault(); reprint({by: 'Lpn', value: debugObject$.value['lpn'] })"
            color="primary">Reprint Lpn</button>
    <button md-raised-button 
            class="resultButtons"
            *ngIf="showResult"
            (click)="returnToSearch($event);"
            color="accent" style="color: white">Search</button>
    <button md-raised-button type="submit" *ngIf="!showResult"
            color="primary">Get Data</button>
    </md-card-actions>
    </form>
    </md-card>
    <button md-button id="back"
            color="accent" 
            [routerLink]="['/utilitiesMenu']">back to utilities menu</button>
  `,
  styles: [`
  .textButton {
    color: dodgerblue;
  }
  md-select {
    margin-bottom: 1em;
  }
  md-card {
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 400px;
    color: black;
    margin: auto;
    margin-top: 0.5em;
  }
  .resultButtons {
    position: relative;
    top: -3em;
  }
  md-card-actions {
    margin-bottom: 5px;
  }
  md-card-content {
    content-aling: center;
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
  .details {
    position: relative;
    left: 0.8em;
  }
  h4 {
    margin-top: 0.2em;
  }
  table {
    position: relative;
    right: 0.3em;
  }
  th,td {    
    text-align: left;
    padding-right: 7px;    
  }
  `]
})
export class ParceldebuggerComponent implements OnInit, OnDestroy {
  @ViewChild('input') input;
  previous: string;
  displayHead: any;
  dialogSubscription$: any;
  printLpn$: any;
  showResult: boolean = false;
  debugItem$: any;
  debugObject$: BehaviorSubject<any> = new BehaviorSubject({});
  subscription$: any;
  constructor(
    private srv: ParcelDebuggerService, 
    private rls: ReprintLpnService,
    private cs: CentralService, 
    public el: ElementRef,
    public dialog: MdDialog) { }

  ngOnInit()
  {
    console.log(this.cs.testString);
    this.cs.appName(this.el, 'Debug Error Lane Parcels');
  }

  returnToSearch(event) {
    event.preventDefault();
    this.showResult = false
    this.debugItem$ = null;
    this.debugObject$.next({});
  }

  getDebugData(event, formValue) {
      event.preventDefault();
    let value: string = formValue.value.toUpperCase();
      this.previous = value;
      if(!formValue.prevent) {
        this.showResult = false;
      }
    if (!value) { 
      alert(`Cannot search empty values`)
      return;
    }
    if (!value.startsWith('0' || 'BP' || 'PKG')) { 
      alert(`Please enter valid value: Barcode or Lpn.`)
      return;
    }
    console.log(`formValue:`, formValue)    
     this.subscription$ = this.srv.getDebugData(value).subscribe(data => {
      if(!data) {
        this.showResult = false
        alert(`Value ${value} returned no results.`);
        this.input.nativeElement.value = '';
        return;
      }
      this.debugObject$.next(data)
      this.showResult = true;      
      },
      (err)=> console.log(err),
      () => {
        console.dir(this.debugObject$.value);
      });
  }

  reprint(value)  {
    if (!value.by || !value.value) { 
      alert(`Cannot pick empty values`)
      return;
    }
    console.log(`formValue:`)
    console.log(value)
    this.printLpn$ = this.rls.reprint(value)
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
        console.log(`Service executed ReprintLpn`)        
      });
  }

openDialog() {
    let dialogRef = this.dialog.open(DeliveryviewComponent);
    this.dialogSubscription$ = this.srv.getDeliveryViewData(this.debugObject$.getValue().delivery_id)
                .filter((d, idx) => d[idx]['items_left'].length > 4 && d[idx]['fully_shipped'] == 'false')
                .subscribe(data => {
                  dialogRef.componentInstance.deliveryId = data[0].delivery_id;
                  dialogRef.componentInstance.fullyPicked = data[0].fully_picked;
                  dialogRef.componentInstance.fullyShipped = data[0].fully_shipped;
                  dialogRef.componentInstance.deliveryArray = data//Array.of(data);
                  console.log(`data form is:`)
                  console.log(data)
                  dialogRef.componentInstance.deliveryData.next(data);
                },
                 (err)=> console.log(err), 
                 () => console.log('Setup Delivery View'));    
    dialogRef.afterClosed().subscribe(value => {
     // console.log(value);      
    });    
  }







  ngOnDestroy() {
    this.cs.resetAppName();
    if (this.debugItem$) {      
      this.debugItem$.unsubscribe();
      console.log(`unsubscribed from debugItem$`);
    }

    if (this.printLpn$) {
      this.printLpn$.unsubscribe();
      console.log(`unsubscribed from printLpn$`);
    }

    if (this.subscription$) {
      this.subscription$.unsubscribe();
      console.log(`unsubscribed from debugger subscription$`);
    }
  }

}
