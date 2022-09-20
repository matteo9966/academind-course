import { createReducer, on } from '@ngrx/store';
import * as fromUserActions from './user.actions';
export interface User {
  username: string;
  userId: string;
}

export interface UserState {
  user: User;
}

const initialUserState: UserState = {
  user: {
    userId: 'user3',
    username: 'maurizio_costanzo',
  },
};

export const userReducer = createReducer(
  initialUserState,
  on(fromUserActions.changeUserName, (state, action) => {
    const neWState = { ...state };
    const newUser = { ...neWState.user };
    neWState.user = newUser;
    neWState.user.username = action.payload.username;
    return neWState;
  })
);
