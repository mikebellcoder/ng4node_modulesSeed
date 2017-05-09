import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MarklpnpickedService } from "app/marklpnpicked/marklpnpicked.service";
import { Observable } from "rxjs/Observable";
import { CentralService } from "app/shared/central.service";

@Component({
  selector: 'app-marklpnpicked',
  template: `    
    <md-card>    
    <md-card-content>
    LPN: <md-input-container>
            <input mdInput type="text" #lpn>
         </md-input-container>
    </md-card-content>
    <md-card-actions align="end">
    <button md-raised-button (click)="markLpnPicked(lpn.value)"
            color="primary">Mark as Picked</button>
    </md-card-actions>
    </md-card>
    <button md-button id="back"
            color="accent" 
            [routerLink]="['/pickingMenu']">back to picking menu</button>
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
export class MarklpnpickedComponent implements OnInit, OnDestroy {
@ViewChild('lpn') lpnInput;
displayHead: any;
pickLpn$: any;
  constructor(private srv: MarklpnpickedService, private cs: CentralService, public el: ElementRef) { }

  ngOnInit() {
    console.log(this.cs.testString);
    this.cs.appName(this.el, 'Mark LPN Picked');    
  }

  markLpnPicked(lpn?: number) {
    this.pickLpn$ = this.srv.markLpnPicked(lpn)
    .subscribe(
            data => {              
              alert(`Marked ${lpn} as picked!`)},
            err => {
              console.log(err.message)
              alert(err.message)
            },
            () => {
              console.log(`Service executed MarkLpnPicked`)
              this.lpnInput.nativeElement.value = '';
            });
  }

  ngOnDestroy() {
    this.cs.resetAppName();
    if (this.pickLpn$) {
    this.pickLpn$.unsubscribe();
    console.log(`unsubscribed from pickLpn$`);
    }
  }

}
