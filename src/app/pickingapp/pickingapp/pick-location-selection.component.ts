import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-location-selection',
  template: `
    <b>Pick Items Located in:</b>
    
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
export class PickLocationSelectionComponent implements OnInit {
selected: string = 'All';
input: any;
type: string = 'number';
@Output() value: EventEmitter<object>;
options: Array<any> = [
  {value: 'All', viewValue: 'Anything', valueType: 'number' },
  {value: 'subInventory', viewValue: 'SubInventory', valueType: 'text' },
  {value: 'locator', viewValue: 'Location', valueType: 'text' },
  {value: 'aisle', viewValue: 'A Aisle', valueType: 'text' },  
  {value: 'column', viewValue: 'A Column', valueType: 'text' }
];
  constructor() {
    this.value = new EventEmitter();
   }

  ngOnInit() {}  

  emitValue(){    
    // let type = this.options.find(v => this.selected == v.value).valueType;
    let ob = { location: this.selected, val: this.input }
    this.value.emit(ob);
    console.log(`For emitted: `, ob)
  }

}


