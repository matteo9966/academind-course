import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit?: number) {
    let limitator = limit ? limit : 10;
    return (<string>value).split('').slice(0, limitator).join('') + '...';
  }
}
