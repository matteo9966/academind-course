import { createReducer, on } from '@ngrx/store';
import { IUser } from '../User.interface';
import * as usersActions from './user.actions';
export type UserStateType = { loadingUsers: boolean; users: IUser[] };
const intialState: UserStateType = {
  loadingUsers: false,
  users: [],
};
export const userReducer = createReducer(
  intialState,
  on(usersActions.getUsersStartAction, (state, action) => {
    return { ...state, loadingUsers: true };
  }),
  on(usersActions.getUsersCompleteAction, (state, action) => {
    return { ...state, loadingUsers: false, users: action.payload.users };
  })
);
