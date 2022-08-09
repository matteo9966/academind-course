import { Injectable } from '@angular/core';
import { find, map, Observable, of } from 'rxjs';
import { Crisis } from './crisis';

export const CRISES: Crisis[] = [
  { id: 1, name: 'Dragon Burning Cities' },
  { id: 2, name: 'Sky Rains Great White Sharks' },
  { id: 3, name: 'Giant Asteroid Heading For Earth' },
  { id: 4, name: 'Procrastinators Meeting Delayed Again' },
];

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor() {}
  getCrisis() {
    return of(CRISES);
  }
  getSingleCrisis(id: number):Observable<Crisis> {
    return this.getCrisis().pipe(
      map((crisis: Crisis[]) => crisis.find((crisis) => crisis.id === id)!)
    );
  }
}
