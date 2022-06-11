import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptor ha intercettato una richiesta http!!');
    const newRequ = req.clone({headers:req.headers.append('Authorization','Bearer token1234')})
    return next.handle(newRequ).pipe(tap(response=>{
        console.log({response});
    }));
  }
}
