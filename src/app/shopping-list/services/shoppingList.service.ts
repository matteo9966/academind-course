import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/models/ingredient.model";

export class ShoppingListService{
    private ingredients :Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('kiwis', 15),
  ];

  addItemToList(item:Ingredient){
    this.ingredients.push(item);
  }

  getIngredients(){
      return this.ingredients.slice();
  }

}