import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';
// import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService],
})
export class RecipeBookComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  selectedRecipe: Recipe | null = null;
  //  changeSelectedRecipe(recipe:Recipe){
  //    this.selectedRecipe=recipe;
  //  }
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => (this.selectedRecipe = recipe)
    );
  }
}
