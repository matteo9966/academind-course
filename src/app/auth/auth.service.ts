import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of, delay, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  loggedIn = false;
  loggedIn$ = new BehaviorSubject(false);
  admin = false;
  login() {
    return of(true).pipe(
      delay(200),
      tap(() => (this.loggedIn$.next(true),this.loggedIn=true))
    );
  }
  loginAsAdmin() {
    return this.login().pipe(tap(() => (this.admin = true)));
  }
  logout() {
    this.loggedIn = false;
    this.loggedIn$.next(false);
    this.admin=false;
  }
}
