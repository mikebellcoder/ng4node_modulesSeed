import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-using-selection',
  template: `
    <b>Pick Using:</b>
    
    <div (change)="emitValue()">
    <md-select [(ngModel)]="selected" (change)="emitValue();">    
    <md-option *ngFor="let option of options" [value]="option.value">{{option.viewValue}}</md-option>
    </md-select>    
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
export class PickUsingSelectionComponent implements OnInit {
selected: string = 'All';
@Output() value: EventEmitter<object>;
options: Array<any> = [
  {value: 'All', viewValue: 'Anything', valueType: 'text' },
  {value: 'forkLift', viewValue: 'Fork Lift', valueType: 'text' },
  {value: 'palletJack', viewValue: 'Pallet Jack', valueType: 'text' },
  {value: 'stockPicker', viewValue: 'Stock Picker', valueType: 'text' }
  
];
  constructor() {
    this.value = new EventEmitter();
   }

  ngOnInit() {}  

  emitValue(){    
    // let type = this.options.find(v => this.selected == v.value).valueType;
    let ob = { using: this.selected }
    this.value.emit(ob);
    console.log(`For emitted: `, ob)
  }

}

