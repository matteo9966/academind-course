import {createFeatureSelector} from '@ngrx/store';
import { GlobalStore } from './Store'; // questa è l'interfaccia globale dello store
import { UserState } from '../user/UserSlice/user.reducer'; // questa è l'interfaccia del feature
const featureKey = 'user'; // user è un feature dello store;


export const userFeature  = createFeatureSelector<UserState>(featureKey); 