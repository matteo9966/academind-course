import { ActionReducerMap } from '@ngrx/store';
import { bookReducer, BookSlice } from '../book/Store/book.reducer';
import { userReducer, UserState } from '../user/UserSlice/user.reducer';

export interface GlobalStore {
  user: UserState;
  book: BookSlice;
}

export const actionReducerMap: ActionReducerMap<GlobalStore> = {
  user: userReducer,
  book: bookReducer,
};
