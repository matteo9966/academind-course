import { BookSlice } from './book.reducer';
import { createSelector } from '@ngrx/store';
import { bookFeature, userFeature } from 'src/app/Store/store.FeatureSelector';
import { selectUserId } from 'src/app/user/UserSlice/user.selector';
export const booksSelector = (state: BookSlice) => state.books;

export const selectBooks = createSelector(bookFeature, booksSelector);

export const selectBooksByAuthor = createSelector(
  selectBooks,
  selectUserId,
  (books, userId) => {
    const booksOfUser = books.filter((book) => book.authorId === userId);
    return booksOfUser;
  }
);
