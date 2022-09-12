import { createReducer, on } from '@ngrx/store';
import * as UIactions from './ui.actions';

export type uiStoreType = {
    loading:boolean
}
const initialUIstate = {
  loading: false,
};

export const uiReducer = createReducer(
  initialUIstate,
  on(UIactions.loadingStartAction, (state, action) => {
    return { ...state, loading: true };
  }),
  on(UIactions.loadingEndAction, (state, action) => {
    return { ...state, loading: false };
  })
);
