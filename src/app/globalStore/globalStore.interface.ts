import { ActionReducerMap } from '@ngrx/store';
import { AuhtStore } from '../auth-store/auth-store.interface';
import { GlobalState as ShoppingListState } from '../store/reducers/shopping-list.reducers';
import { reducer as authReducer } from '../auth-store/auth.reducer';
import { reducer as shoppingListReducer } from '../store/reducers/shopping-list.reducers';
export interface GlobalStore {
  shoppingList: ShoppingListState;
  auth: AuhtStore;
}

export const globalReducer: ActionReducerMap<GlobalStore> = {
  auth: authReducer,
  shoppingList: shoppingListReducer,
};
