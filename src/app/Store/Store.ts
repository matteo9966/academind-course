import { ActionReducerMap } from "@ngrx/store";
import { userReducer, UserState } from "../user/UserSlice/user.reducer";

export interface GlobalStore {
    user:UserState
}

export const actionReducerMap:ActionReducerMap<GlobalStore> = {
  user:userReducer
}