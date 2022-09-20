import {createFeatureSelector} from '@ngrx/store';
import { GlobalStore } from './Store'; // questa è l'interfaccia globale dello store
import { UserState } from '../user/UserSlice/user.reducer'; // questa è l'interfaccia del feature
import { BookSlice } from '../book/Store/book.reducer';
export const featureUserKey = 'user'; // user è un feature dello store;
export const featureBookKey = 'book'; // user è un feature dello store;


export const userFeature  = createFeatureSelector<UserState>(featureUserKey); // questo per estrarre un top level selector
export const bookFeature = createFeatureSelector<BookSlice>(featureBookKey);