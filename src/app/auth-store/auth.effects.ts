import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap, tap } from 'rxjs';
import { authenticationActions, subscribeStart } from './auth.actions';
import * as AUTHactions from './auth.actions';
import { loadingEndAction } from '../ui-store/ui.actions';
import { IloginResponse } from 'src/interfaces/login-response.interface';

const newUserURL = 'http://localhost:9000/new-user';
const loginURL = 'http://localhost:9000/login-user';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {} // observable che ascolta tutti i dispathced actions, non esegui il codice

  actionLogin = createEffect(
    // questo stream non deve mai morire! se muore non ascolterà più per azioni
    () =>
      this.actions$.pipe(
        ofType(AUTHactions.subscribeStart), // passo l'action creato con createAction
        //il prossimo
        switchMap((action) => {
          console.log({ action_payload_user: action.payload.user });
          //uso httpClient
          return this.httpClient
            .post(
              'http://localhost:9000/new-user',
              JSON.stringify(action.payload.user)
            )
            .pipe(
              map(() => {
                return AUTHactions.subscriptionComplete({
                  payload: { subscribed: true },
                });
              }),
              catchError((error) => this.handleError(error))
            );
          //deve comunque restituire uno state,deve fare un dispatch qui, una volta conclusa l'action
        })
      )
  );

  //manca la logica per l'iscrizione
  private handleError(error: HttpErrorResponse) {
    console.log({ error });
    //devo fare il dispatch di un error action!

    return of(
      AUTHactions.subscriptionComplete({ payload: { subscribed: false } })
    );
  }

  effect = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTHactions.subscriptionComplete),
      switchMap((data) => {
        return of(loadingEndAction());
      })
    );
  });

  loginEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(AUTHactions.loginStart),
      switchMap((action) => {
        const payload = action.payload; // un oggetto del tipo {name:string};
        return this.httpClient
          .post<IloginResponse>(loginURL, JSON.stringify(payload))
          .pipe(
            map((response) => {
              const loggedIn = response.user; // true o false;
              return AUTHactions.loginComplete({ payload: { user: loggedIn } });
            })
          );
      })
    );
  });



}
