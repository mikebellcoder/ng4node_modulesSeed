import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pick-type-selection',
  template: `
  <b>Pick Type:</b> {{ valueArray }}
  <br>
      <span *ngFor="let button of buttons; let i = index">
        <md-checkbox color="primary" 
              [disableRipple]="setting"
              [value]="button.value"
              (change)="$event.checked? addValue($event.source.value): removeValue(i);">
              {{button.viewValue}}</md-checkbox>
      <br>
      </span>
        
      
  `,
  styles: []
})
export class PickTypeSelectionComponent implements OnInit {
setting: boolean = false;
valueArray: string[] = [];
buttons: Array<any> = [
  {value: 'FB', viewValue: 'Full Case'},
  {value: 'PP', viewValue: 'Split Case'},
  {value: 'CSS', viewValue: 'CSS'},
  {value: 'CSSP', viewValue: 'CSSP'}
];

@Output() value: EventEmitter<any>;
  constructor() {
    this.value = new EventEmitter();
  }

  ngOnInit() {
    
  }
  emitValue() {
  this.value.emit({pickType: this.valueArray})
  }
  addValue(value) {
    this.valueArray.push(value); 
    this.emitValue();
  }
  removeValue(value){
    this.valueArray.splice(value, 1);
    this.emitValue();
  }


}
