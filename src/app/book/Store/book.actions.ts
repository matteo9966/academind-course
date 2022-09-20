import {createAction,props} from '@ngrx/store';
import { IBook } from './book.reducer';
const bookActions = {
    ADD_BOOK:'[book] add book',
}

export const addBookAction = createAction(bookActions.ADD_BOOK,props<{payload:IBook}>())