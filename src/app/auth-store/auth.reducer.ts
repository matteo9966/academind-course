import { createReducer, on } from '@ngrx/store';
import { AuhtStore } from './auth-store.interface';
import * as AuthActions from './auth.actions';
const initialState: AuhtStore = {
  isLoggedIn: false,
  token: '',
  username: '',
  subscribed: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.LogoutAction, (state, action) => {
    return { ...initialState };
  }),
  on(AuthActions.LoginAction, (state, action) => {
    if (action.payload.username) {
      let newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      return newState;
    }
    return { ...initialState };
  }),
  on(AuthActions.SetTokenAction, (state, action) => state),
  on(AuthActions.setUserName, (state, action) => state),
  on(AuthActions.subscribeStart, (state, action) => {
    return { ...state, subscribed: false };
  }),
  on(AuthActions.subscriptionComplete, (state, action) => {
    return { ...state, subscribed: action.payload.subscribed };
  }),
  on(AuthActions.loginStart, (state, action) => {
    return {
      ...state,
      isLoggedIn: false,
      token: '',
      subscribed: false,
      username: action.payload.name,
    };
  }),
  on(AuthActions.loginComplete, (state, action) => {
    const loginOk = action.payload.user; // booleano true o false per dire se si è loggato
    let userName = state.username;
    if (!loginOk) {
      userName = '';
    }
    return {
      ...state,
      isLoggedIn: loginOk,
      subscribed: loginOk,
      token: '',
      username: userName,
    };
  })
);
