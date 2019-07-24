import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'black';
  @HostBinding('style.border-color') border = 'red';
  constructor() { }
  @HostListener('keypress') keyDown() {
    // tslint:disable-next-line:no-bitwise
    this.border = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // tslint:disable-next-line:no-bitwise
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
