import { ActionReducerMap } from '@ngrx/store';
import { AuhtStore } from '../auth-store/auth-store.interface';
import { GlobalState as ShoppingListState } from '../store/reducers/shopping-list.reducers';
import { reducer as authReducer } from '../auth-store/auth.reducer';
import { reducer as shoppingListReducer } from '../store/reducers/shopping-list.reducers';
import { uiReducer,uiStoreType } from '../ui-store/ui.reducers';
import { userReducer, UserStateType } from '../user/UserStore/user.reducer';
/* 
l'interfaccia del GlobalStore è fatto da slice di interfacce,
shoppingList
auth
queste sono le interfacce che descrivono 'initial state di ogni slice!
*/
export interface GlobalStore {
  shoppingList: ShoppingListState;
  auth: AuhtStore;
  ui:uiStoreType;
  users: UserStateType;
}

export const globalReducer: ActionReducerMap<GlobalStore> = {
  auth: authReducer, // il reducer creato con createReducer
  shoppingList: shoppingListReducer, // il reducer creato con createReducer
  ui:uiReducer,
  users:userReducer
};
