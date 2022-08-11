import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private heroService:HeroService,private activatedRoute:ActivatedRoute) { }
  heroList:Hero[]=[];
  selected:number=0;
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes=>{
      this.heroList=heroes;
    })

    this.activatedRoute.paramMap.subscribe(params=>{
      this.selected = +params.get('id')!;
    })
  }

}
