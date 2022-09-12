import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, of, tap } from 'rxjs';
import { UserService } from '../user.service';
import * as usersActions from './user.actions';
@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}
//TODO: come fare handle errore???
getusers=createEffect(() => {
  return this.actions$.pipe(
    ofType(usersActions.getUsersStartAction),
    // tap(()=>{console.log('INTERCETTO GETUSERSSTARTACTION')}),
    switchMap(() => {
      return this.userService.getAllUsers();
    }),
    map((users) => {
      return usersActions.getUsersCompleteAction({
        payload: { users: users },
      });
    })
  );
});
  
}
