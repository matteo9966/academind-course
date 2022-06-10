import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any[],key:string): any[] {
    return (value).sort((a,b)=>{
      return (<string>a[key]).localeCompare(b[key])
    })
  }

}
