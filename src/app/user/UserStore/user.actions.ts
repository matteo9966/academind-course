import { createAction, props } from '@ngrx/store';
import { IUser } from '../User.interface';

const USER_ACTIONS = {
  GET_USERS_START: '[user] get users start',
  GET_USERS_COMPLETE: '[user] get users complete',
};

export const getUsersStartAction = createAction(USER_ACTIONS.GET_USERS_START);
export const getUsersCompleteAction = createAction(
  USER_ACTIONS.GET_USERS_COMPLETE,
  props<{ payload: { users: IUser[] } }>()
);
