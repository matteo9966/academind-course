import { Injectable } from '@angular/core';
import { Actions, Effect, ofType,createEffect } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { authenticationActions } from './auth.actions';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {} // observable che ascolta tutti i dispathced actions, non esegui il codice

 
  actionLogin =createEffect(
      
     ()=>this.actions$.pipe(
        ofType(authenticationActions.LOGIN), // si aspetta un action
        tap(() => {
          console.log(
            'intercettato questo login, non faccio asolutamente nulla ma ti dico che effect sta funzionando!'
          );
        })
      ),{dispatch:false}
  ) 
}
