import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { DataStorageService } from '../services/data-storage.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeSubscription: Subscription | undefined;

  recipes: Recipe[] | undefined;
  constructor(
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) {}
  ngOnDestroy(): void {
    this.recipeSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    // this.recipes= this.recipeService.getRecipes();
    // this.recipeSubscription = this.recipeService.recipeList$.subscribe(
    //   (recipes) => (this.recipes = recipes)
    // );

    this.dataStorageService.getRecipes().subscribe({
      next: (data) => {
        console.log('recieved some data:');
        this.recipes=data.recipes;
      },
      error: (error) => console.log('ERRORE:', error),
    });
  }
}
