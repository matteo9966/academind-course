import { createReducer, on } from '@ngrx/store';
import * as fromActions from './book.actions';
export interface IBook {
  name: string;
  pages: number;
  authorId: string;
}

export interface BookSlice {
  books: IBook[];
}

const initialState: BookSlice = {
  books: [
    { authorId: 'user1', name: 'harry potter and the red book', pages: 700 },
    { authorId: 'user2', name: 'book of secrets', pages: 900 },
    { authorId: 'user3', name: 'book full of stuff', pages: 30 },
    { authorId: 'user3', name: 'book full of stuff', pages: 30 },
    { authorId: 'user3', name: 'dog in the next space', pages: 620 },
    { authorId: 'user4', name: 'red ribbon joe', pages: 302 },
    { authorId: 'user5', name: 'philomena stuff', pages: 1330 },
    { authorId: 'user6', name: 'rock history', pages: 320 },
  ],
};

export const bookReducer = createReducer(
  initialState,
  on(fromActions.addBookAction, (state, { payload }) => {
    const newBook = payload;
    let newState = { ...state };
    state.books.push(newBook);
    return newState;
  })
);
