import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorKeys',
})
export class ErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors|null): string[] | null {
    if (!errors) return null;
    return Object.keys(errors);
  }
}
