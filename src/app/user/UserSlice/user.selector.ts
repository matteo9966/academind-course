import {createSelector} from '@ngrx/store'
import {userFeature} from '../../Store/store.FeatureSelector';
import { UserState } from './user.reducer';
const selectUsername = (userState:UserState)=>userState.user.username;
const selectIdFromUser = (userState:UserState)=>userState.user.userId;
export const selectUserUsername = createSelector(userFeature,selectUsername);
export const selectUserId = createSelector(userFeature,selectIdFromUser);
