import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  //element ref per avere un riferimento al elemento
  constructor(private element: ElementRef) {}

  @HostBinding('style.font-size') fontSize!:string;

  @HostBinding('class') class: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.class = 'highlight';
    this.fontSize='30px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.class = '';
    this.fontSize='20px';
  }
}
