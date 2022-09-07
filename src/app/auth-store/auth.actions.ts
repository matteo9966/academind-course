import { createAction, props } from "@ngrx/store"

export const authenticationActions = {
    LOGIN:'login',
    LOGOUT:'logout',
    SET_TOKEN:'set_token',
    SET_USERNAME:'set_username',
}

export const LoginAction = createAction(authenticationActions.LOGIN,props<{payload:{username:string,token:string,loggedIn:boolean}}>());
export const LogoutAction =createAction(authenticationActions.LOGOUT);
export const SetTokenAction = createAction(authenticationActions.SET_TOKEN,props<{payload:{token:string}}>());
export const setUserName = createAction(authenticationActions.SET_USERNAME,props<{payload:{username:string}}>());