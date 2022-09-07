import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState, Ingredient } from '../store/reducers/shopping-list.reducers';
import {
  AddIngredientAction,
  AddIngredientsAction,
  deleteIngredientAction,
  updateIngredientAction,
} from '../store/actions/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    private store: Store<{ shoppingList: GlobalState }>
  ) {}
  ingredients!: Observable<{ ingredients: Ingredient[] }>;
  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList'); // selezionare uno slice

    this.ingredients.subscribe((ingredients) => console.log({ ingredients }));
  }

  addIngredient() {
    this.store.dispatch(
      AddIngredientAction({ payload: { id: 33, name: 'tomacco' } })
    );
  }
  addIngredients() {
    this.store.dispatch(
      AddIngredientsAction({
        ingredients: [
          { id: 1, name: 'tomacco1' },
          { id: 2, name: 'tomacco2' },
          { id: 3, name: 'tomacco3' },
          { id: 4, name: 'tomacco4' },
          { id: 5, name: 'tomacco5' },
        ],
      })
    );
  }

  removeIngredient(id: number) {
    this.store.dispatch(
      deleteIngredientAction({ payload: { ingredientId: id } })
    );
  }

  updateIngredient(id: number) {
    this.store.dispatch(
      updateIngredientAction({
        payload: {
          ingredientId: id,
          updatedIngredient: { id: id, name: 'updatedIngredient!!!' },
        },
      })
    );
  }
}
