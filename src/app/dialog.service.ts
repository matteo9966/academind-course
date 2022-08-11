import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  confirm(message?:string){
     const confirmation = window.confirm(message|| ' Are you sure?');
     return of(confirmation);
  }
}
