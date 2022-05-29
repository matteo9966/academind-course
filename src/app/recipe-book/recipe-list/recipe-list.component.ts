import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'recipe',
      'nice recipe for friends ',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg'
    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
