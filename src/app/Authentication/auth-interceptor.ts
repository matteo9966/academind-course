import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { take } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const token = user?.token?.toString() || '0';
        let headers = new HttpHeaders({ Authorization: token });
        const modifiedRequest = req.clone({ headers });
        return next.handle(modifiedRequest);
      })
    );
  }
}
