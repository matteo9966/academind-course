import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private element:ElementRef) { }
  
  private highlight(color:string){
    this.element.nativeElement.style.backgroundColor=color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('#ECECEC')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('transparent')
  }

}
