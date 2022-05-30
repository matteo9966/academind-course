import {
  Directive,
  Host,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input() list: HTMLElement | undefined;

  isOpen = false;
  dropdown: HTMLElement | undefined;

  @HostListener('click') toggleOpen() {
    !this.list?.classList.contains('show')
      ? this.renderer.addClass(this.list, 'show')
      : this.renderer.removeClass(this.list, 'show');
  }

  constructor(private renderer: Renderer2) {}
}
