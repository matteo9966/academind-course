import { createAction, props } from '@ngrx/store';

const loadingActions = {
  LOADING_START: '[ui] loading start',
  LOADING_END: '[ui] loading end',
};

export const loadingStartAction = createAction(loadingActions.LOADING_START);
export const loadingEndAction = createAction(loadingActions.LOADING_END);
