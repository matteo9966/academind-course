import { Injectable } from '@angular/core';
// import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Recipe } from '../recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipeList$ = new BehaviorSubject<Recipe[]>([]); //ascolta recipeList$ per avere la lista sempre aggiornata di recipes!
  private recipes: Recipe[] = [
    new Recipe(
      'burger',
      'nice recipe for friends ',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg',
      [new Ingredient('burger', 200)],
      0
    ),
    new Recipe(
      'Cavatelli al sugo',
      'Pasta tradizionale molto buona per gustarsi il buon cibo',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg',
      [new Ingredient('cavatielli', 100), new Ingredient('sugo', 30)],
      1
    ),
  ];

  constructor(private router: Router) {
    this.recipeList$.next(this.recipes);
    console.clear();
    console.log(JSON.stringify(this.recipes));
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  updateRecipe(id: number, recipe: Recipe) {
    if (this.recipes.length < id) return;

    this.recipes[id] = recipe;
    this.recipeList$.next(this.recipes);
  }

  addNewRecipe(recipe: Recipe) {
    const index = this.recipes.length
    recipe.id=index
    this.recipes.push(recipe);
    this.recipeList$.next(this.recipes);
  }

  deleteRecipe(id: number) {
    if (id > this.recipes.length) return;

    if (this.recipes.length === 1) {
      this.recipes = [];
    } else {
      this.recipes.splice(id, 1);
    }
    console.log(this.recipes);
    this.recipeList$.next(this.recipes);
    this.router.navigate(['/recipes']);
  }
  removeIngredient(recipeId:number,ingredientIndex:number){
    this.recipes[recipeId].ingredients.splice(ingredientIndex,1);
    this.recipeList$.next(this.recipes);
  }
}
