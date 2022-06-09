import { Directive,ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpenDropdown]'
})
export class OpenDropdownDirective {
   
  @Input() dropdown:HTMLElement|undefined;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) {

   }

   @HostListener('click') onClick(){
     const isOpen = this.elementRef.nativeElement.classList.contains('show');
     if(isOpen){
       this.renderer.removeClass(this.elementRef.nativeElement,'show')
       this.renderer.removeClass(this.dropdown,'open');
      }else{
       this.renderer.addClass(this.elementRef.nativeElement,'show')
       this.renderer.addClass(this.dropdown,'open');
     }
   }

  

}
