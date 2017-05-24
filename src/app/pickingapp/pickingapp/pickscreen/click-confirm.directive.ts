import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickConfirm]'
})
export class ClickConfirmDirective {
isConfirmed: boolean = false;
hostStyle: any;
  constructor(private el: ElementRef) {
    console.log(this.el)
    this.hostStyle = this.el.nativeElement.style;
   }

@HostListener('click') changeDisplay(): void {
  this.isConfirmed = !this.isConfirmed;
  this.hostStyle.backgroundColor = this.isConfirmed? 'green' : 'white';;
  this.hostStyle.color = this.isConfirmed? 'white' : 'black';
  console.log(`clickConfirm Directive clicked!`, this.isConfirmed)
}

}
