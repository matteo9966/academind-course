import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'recipe',
      'nice recipe for friends ',
      'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg'
      ),
      new Recipe(
        'Cavatelli al sugo',
        'Pasta tradizionale molto buona per gustarsi il buon cibo',
        'https://www.tastefullyeclectic.com/wp-content/uploads/2016/06/0e7995af83e663e4f71db4506240bde8ed97aeb6.jpg'
        ),
      ];
      constructor() { }
      
      getselectedRecipe(recipe:Recipe){
         this.selectedRecipe.emit(recipe);
      }

  ngOnInit(): void {
  }

}
