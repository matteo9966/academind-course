import { createAction, props } from '@ngrx/store';

export const authenticationActions = {
  LOGIN: '[authentication] login',
  LOGOUT: '[authentication] logout',
  SET_TOKEN: '[authentication] set_token',
  SET_USERNAME: '[authentication] set_username',
  SUBSCRIBE_START: '[authentication] subscribe_start', // questo action è utile per l'effect che intercetta il subscribe start
  SUBSCRIBE_COMPLETE: '[authentication] subscibe',
  LOGIN_START: '[authentication] login_start',
  LOGIN_COMPLETE: '[authentication] login_complete',
  //   SUBSCRIBE_FAIL:' [subscribe] subscribe_fail'
};

export const LoginAction = createAction(
  authenticationActions.LOGIN,
  props<{ payload: { username: string; token: string; loggedIn: boolean } }>()
);
export const LogoutAction = createAction(authenticationActions.LOGOUT);
export const SetTokenAction = createAction(
  authenticationActions.SET_TOKEN,
  props<{ payload: { token: string } }>()
);
export const setUserName = createAction(
  authenticationActions.SET_USERNAME,
  props<{ payload: { username: string } }>()
);
export const subscribeStart = createAction(
  authenticationActions.SUBSCRIBE_START,
  props<{ payload: { user: { name: string; id: number } } }>()
);
export const subscriptionComplete = createAction(
  authenticationActions.SUBSCRIBE_COMPLETE,
  props<{ payload: { subscribed: boolean } }>()
);
export const loginStart = createAction(
  authenticationActions.LOGIN_START,
  props<{ payload: { name: string } }>()
);
export const loginComplete = createAction(
  authenticationActions.LOGIN_COMPLETE,
  props<{ payload: { user: boolean } }>()
);
// export const subscribeFailAction = createAction(authenticationActions.SUBSCRIBE_FAIL,props<{payload:{}}>)
