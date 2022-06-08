import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authService.service';

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated().then((auth) => {
        if (auth) {
            return true
        } else {
            this.router.navigate(['/']);
            return false            
        }
    });
  }

  constructor(private authService: AuthService,private router:Router) {}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.canActivate(childRoute,state);
    }
}
