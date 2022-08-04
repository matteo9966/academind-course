import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippYContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}
}
