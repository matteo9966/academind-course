// il rreducer, è solo una funzione
import { Action, createReducer, on } from '@ngrx/store';
import {
  AddIngredientAction,
  AddIngredientActions,
  AddIngredientsAction,
  IngredientActions,
} from '../actions/shopping-list.actions';

import * as Ingredient_Actions from '../actions/shopping-list.actions';
export interface Ingredient {
  name: string;
  id: number;
}

export type GlobalState = { ingredients: Ingredient[],lastEditedIngredientIndex:number };
const initialState: GlobalState = {
  ingredients: [
    { name: 'pomodor', id: 1 },
    { name: 'pepper', id: 2 },
  ],
  lastEditedIngredientIndex:-1
}; // lo stato è un js object

export function shoppingListReducer(
  state = initialState,
  action: AddIngredientActions
): GlobalState {
  switch (action.type) {
    case IngredientActions.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };

      break;

    default:
      return state;
      break;
  }
}

const reducer = createReducer(
  initialState,
  on(AddIngredientAction, (state, action) => {
    return { ...state, ingredients: [...state.ingredients, action.payload] };
  }),
  on(AddIngredientsAction, (state, actions) => {
    // azione e il reducer
    return {
      ...state,
      ingredients: [...state.ingredients, ...actions.ingredients],
    };
  }),
  on(Ingredient_Actions.deleteIngredientAction, (state, action) => {
    console.log(action.payload.ingredientId);
    const ingredientIndex = state.ingredients
      .map((ingredient) => ingredient.id)
      .findIndex((id) => id == action.payload.ingredientId);
    if (ingredientIndex) {
      let newIngredientList = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload.ingredientId
      );
      return { ...state, ingredients: newIngredientList };
    }
    return state;
  }),
  on(Ingredient_Actions.updateIngredientAction, (state, action) => {
    const ingredientInStateIndex = state.ingredients.findIndex(
      (ingredient) => ingredient.id === action.payload.ingredientId
    );
    if (ingredientInStateIndex >= 0) {
      let ingredientList = state.ingredients
      ingredientList=ingredientList.splice(ingredientInStateIndex, 1);
      ingredientList.push(action.payload.updatedIngredient);
      return { ...state, ingredients: ingredientList };
    }
    return state;
  })
);

// const addIngredientsReducer = createReducer(
//   initialState, // stato iniziale
//   on(AddIngredientsAction, (state, actions) => { // azione e il reducer
//     return {
//       ...state,
//       ingredients: [...state.ingredients, ...actions.ingredients],
//     };
//   })
// );

export { reducer /* addIngredientsReducer */ };
