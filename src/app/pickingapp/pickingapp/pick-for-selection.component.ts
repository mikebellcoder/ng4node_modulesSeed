import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-for-selection',
  template: `
    <b>Pick Items For:</b>
    
    <div (change)="emitValue()">
    <md-select [(ngModel)]="selected" (change)="emitValue();">    
    <md-option *ngFor="let option of options" [value]="option.value">{{option.viewValue}}</md-option>
    </md-select>
    <md-input-container [ngClass]="{hide: selected == 'All'}">
    <input mdInput [(ngModel)]="input">
    </md-input-container>
    </div>
  `,
  styles: [`
  .hide {
    display: none;
  }
  md-input-container {    
    position: relative;
    top: 3px;
    font-size: 1.1rem;
    margin-left: 1.15em;
    width: 120px;
  }
  input {
    text-align: center;
  }
  `]
})
export class PickForSelectionComponent implements OnInit {
selected: string = 'All';
input: any;
type: string = 'number';
@Output() value: EventEmitter<object>;
options: Array<any> = [
  {value: 'All', viewValue: 'Anything', valueType: 'number' },
  {value: 'order_number', viewValue: 'Order Number', valueType: 'number' },
  {value: 'delivery_id', viewValue: 'Delivery Id', valueType: 'number' },
  {value: 'ship_to_name', viewValue: 'Ship To Name', valueType: 'text' },
  {value: 'item_code', viewValue: 'Item Code', valueType: 'text' }
];
  constructor() {
    this.value = new EventEmitter();
   }

  ngOnInit() {}  

  emitValue(){    
    // let type = this.options.find(v => this.selected == v.value).valueType;
    let ob = { for: this.selected, val: this.input }
    this.value.emit(ob);
    console.log(`For emitted: `, ob)
  }

}
