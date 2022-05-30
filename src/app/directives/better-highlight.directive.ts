import { Directive, ElementRef, HostListener, OnInit, Renderer2,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor:string='transparent';
@Input() highlightColor:string='blue';
 @HostBinding('style.backgroundColor') backgroundColor:string ='transparent';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue'); 
  }
  @HostListener('mouseenter') mouseenter(eventData:Event){
    
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue'); 
    this.backgroundColor=this.highlightColor
   }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent'); 
    this.backgroundColor=this.defaultColor;
   }
}
