import { createAction, props } from "@ngrx/store"


export const changeUserName = createAction('[user] change name',props<{payload:{username:string}}>());
