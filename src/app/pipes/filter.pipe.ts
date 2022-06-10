import { Pipe, PipeTransform } from '@angular/core';
import { Server } from '../servers.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filter:(value:any)=>boolean) {
     return (<Server[]>value).filter(filter)

  }

}
