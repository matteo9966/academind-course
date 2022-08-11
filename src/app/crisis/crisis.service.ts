import { Injectable } from '@angular/core';
import { CRISES } from './mock-crisis';
import { Crisis } from './crisis';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  crises$ = new BehaviorSubject(CRISES);

  constructor() {}

  getCrises() {
    return this.crises$;
  }
  getCrisis(id: number) {
    return this.crises$.pipe(
      map((crises) => crises.find((crises) => crises.id === id))
    );
  }
}
