import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
// import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {

  constructor() {}
   selectedRecipe:Recipe|null = null;
   changeSelectedRecipe(recipe:Recipe){
     this.selectedRecipe=recipe;
   }
  ngOnInit(): void {}
}
