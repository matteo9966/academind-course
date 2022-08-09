import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { Hero } from './hero.type';

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService:getched heroes');
    return of(HEROES)
  }
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
