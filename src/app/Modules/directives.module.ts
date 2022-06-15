import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from '../directives/dropdown.directive';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DropdownDirective, HoverHighlightDirective],
  exports: [DropdownDirective, HoverHighlightDirective],
})
export class DirectivesModule {}
