import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './services/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  subscription: Subscription | undefined;
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.newShoppingList.subscribe(
      (ingredientes) => (this.ingredients = ingredientes)
    );
  }

  addItemToList(item: Ingredient) {
    this.shoppingListService.addItemToList(item);
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.ingredients.push(item);
  }
}
