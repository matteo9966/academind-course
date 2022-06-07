import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Recipe } from '../recipe.model';

// @Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'burger',
      'nice recipe for friends ',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg',
      [new Ingredient('burger', 200)]
    ),
    new Recipe(
      'Cavatelli al sugo',
      'Pasta tradizionale molto buona per gustarsi il buon cibo',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg',
      [new Ingredient('cavatielli', 100), new Ingredient('sugo', 30)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
