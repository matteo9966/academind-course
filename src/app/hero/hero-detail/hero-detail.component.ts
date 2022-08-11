import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}
  hero$!: Observable<Hero>;
  ngOnInit(): void {
    //arrivo qui con /hero/:id, ora voglio saper quale è quel id..
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const heroId = params.get('id')!;
        return this.heroService.getHero(heroId);
      })
    );
  }

  gotoHeroes(hero:Hero){
    this.router.navigate(['/heroes',{id:hero.id}])
  }
}
