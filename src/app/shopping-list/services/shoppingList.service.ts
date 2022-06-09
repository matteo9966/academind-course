import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/models/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService{
    newShoppingList:Subject<Ingredient[]> = new Subject();
    private ingredients :Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('kiwis', 15),
  ];

  addItemToList(item:Ingredient){
    this.ingredients.push(item);
    this.newShoppingList.next(this.ingredients)
  }

  getIngredients(){
      return this.ingredients.slice();
  }

}