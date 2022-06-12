import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';
// import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [],
})
export class RecipeBookComponent implements OnInit {
  constructor(private recipeService: RecipeService,private router:Router,private activeRoute:ActivatedRoute) {}
  selectedRecipe: Recipe | null = null;
  //  changeSelectedRecipe(recipe:Recipe){
  //    this.selectedRecipe=recipe;
  //  }
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => (this.selectedRecipe = recipe)
    );
  }
  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activeRoute})
  }
}
