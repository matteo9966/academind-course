import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { BehaviorSubject, Subject } from 'rxjs';
export class ShoppingListService {
  selectedIngredientIndex$:Subject<number>=new Subject();
  newShoppingList: Subject<Ingredient[]> = new Subject();
  
  
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('kiwis', 15),
  ];
  ingredientsSubject$ = new BehaviorSubject<Ingredient[]>(this.ingredients);

  addItemToList(item: Ingredient) {
    this.ingredients.push(item);
    this.newShoppingList.next(this.ingredients);
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientFromList(index: number) {
    if (index > this.ingredients.length) {
      return;
    }
    return this.ingredients[index];
  }
  updateIngredient(index:number,ingredient:Ingredient){
    console.log('aggiorno gli ingredienti con',ingredient)
    this.ingredients[index]=ingredient;
    this.ingredientsSubject$.next(this.ingredients);

  }
}
