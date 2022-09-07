import { Action, createAction, props } from '@ngrx/store';
import { Ingredient } from '../reducers/shopping-list.reducers';
export const IngredientActions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  ADD_INGREDIENTS: 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT: 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT: 'DELETE_INGREDIENTE',
};

export const AddIngredientAction = createAction(
  IngredientActions.ADD_INGREDIENT,
  props<{ payload: Ingredient }>()
);

export const AddIngredientsAction = createAction(
  IngredientActions.ADD_INGREDIENTS,
  props<{ ingredients: Ingredient[] }>() // metadata per descrivere il payload
);

export const deleteIngredientAction = createAction(
  IngredientActions.DELETE_INGREDIENT,
  props<{ payload: { ingredientId: number } }>()
);

export const updateIngredientAction = createAction(
  IngredientActions.UPDATE_INGREDIENT,
  props<{ payload: { ingredientId: number; updatedIngredient: Ingredient } }>()
);

/*** questa è una vecchia implementazione, ora utilizza la versione con create action */
export class AddIngredientActions implements Action {
  readonly type: string = IngredientActions.ADD_INGREDIENT;
  payload!: Ingredient;
}
