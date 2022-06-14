import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, BehaviorSubject, tap, throwError } from 'rxjs';
import { AuthenticatedUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user$: BehaviorSubject<AuthenticatedUser | null>;
  authenticated = false;
  timerLogoutId: any;
  constructor(private http: HttpClient, private router: Router) {
    this.user$ = new BehaviorSubject<AuthenticatedUser | null>(null);
    // this.user$.subscribe(user=>{
    //      if()
    // })
  }

  signup(email: string, name: string, password: string) {
    return this.http.post<{ added: boolean }>('http://localhost:5002/signup', {
      email,
      name,
      password,
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<{ authorized: boolean; token: string }>(
        'http://localhost:5002/auth',
        {
          email,
          password,
        }
      )
      .pipe(
        catchError((error: any) => {
          console.log({ error });
          if (error?.error) {
            return throwError(() => new Error('something went wrong'));
          }
          return throwError(() => new Error('login error, try again later'));
        }),
        tap((response) => {
          if (response.authorized) {
            const user = new AuthenticatedUser(email, response.token);
            this.user$.next(user);
            this.autoLogout(+user.token! - new Date().getTime());
            if (user.token) {
              localStorage.setItem('token', JSON.stringify(user));
            }
          }
        })
      );
  }

  logout() {
    this.user$.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('token');
    if (this.timerLogoutId) clearTimeout(this.timerLogoutId);
  }

  autoLogin() {
    const user = localStorage.getItem('token');
    if (!user) {
      return;
    }
    const userObj: { _token: string; email: string } = JSON.parse(user);

    const Authuser = new AuthenticatedUser(userObj.email, userObj._token);

    if (Authuser.token) {
      this.user$.next(Authuser);
      this.autoLogout(+Authuser.token! - new Date().getTime());
    }
  }

  autoLogout(expiration: number) {
    this.timerLogoutId = setTimeout(() => {
      this.logout();
    }, expiration);
  }
}
