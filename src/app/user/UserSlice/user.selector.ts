import {createSelector} from '@ngrx/store'
import {userFeature} from '../../Store/store.FeatureSelector';
import { UserState } from './user.reducer';
const selectUsername = (userState:UserState)=>userState.user.username;
export const selectUserUsername = createSelector(userFeature,selectUsername);