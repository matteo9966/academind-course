import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shoppingList.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  constructor(private recipeService: RecipeService,private shoppingListService:ShoppingListService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => (this.selectedRecipe = recipe)
    );
  }

  addIngredientsToShoppingList(e:Event){
    e.preventDefault();
    if(this.selectedRecipe){
      this.selectedRecipe.ingredients.forEach(ingredient => {
        this.shoppingListService.addItemToList({...ingredient})
      });
    }
  }
  
}
