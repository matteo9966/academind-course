import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero$!:Observable<Hero>;

  constructor(
    private route :ActivatedRoute,
    private router:Router,
    private service:HeroService,
  ) { }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(switchMap((param)=>{
      const id = param.get('id')!;
      return this.service.getHero(id);
    }))
  }
  gotoHeroes(hero:Hero){
    this.router.navigate(['/heroes',{id:hero.id,name:hero.name}]);
  }

}
