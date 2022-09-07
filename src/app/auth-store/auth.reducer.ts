import { createReducer, on } from '@ngrx/store';
import { AuhtStore } from './auth-store.interface';
import * as AuthActions from './auth.actions';
const initialState: AuhtStore = { isLoggedIn: false, token: '', username: '' };

export const reducer = createReducer(
  initialState,
  on(AuthActions.LogoutAction, (state, action) => {
    return {...initialState};;
  }),
  on(AuthActions.LoginAction, (state, action) => {
    if (action.payload.username) {
      let newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      return newState;
    }
    return {...initialState};
  }),
  on(AuthActions.SetTokenAction, (state, action) => state),
  on(AuthActions.setUserName, (state, action) => state)
);
