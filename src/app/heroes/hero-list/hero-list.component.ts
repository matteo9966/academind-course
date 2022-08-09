import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) { }
  
  heroes$!:Observable<Hero[]>;
  selectedId=0;

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params=>{
        this.selectedId = parseInt(params.get('id')!,10);
        return this.service.getHeroes();
      })
    )
  }

}
