import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class CentralService {
header: any;
testString: string = 'Central Services Available!';

  constructor() { 
    //this.header = this._el.nativeElement;
    //
  }

  appName(element: ElementRef, name?: string) {
    this.header = element.nativeElement.parentElement.children[0].children[0].children[0].children[0];
    if (!name) {
      this.header.textContent = 'Dissem Center';
    } else {
    this.header.textContent = name;
    }
  }

  resetAppName() {
    this.header.textContent = 'Dissem Center';
  }

}
