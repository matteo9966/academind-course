import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  NavigationExtras,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild,CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
 
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const url = `/${route.path}`;
   return this.checkLogin(url);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log({ childRoute, state });
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log({ route, state, urlTree: this.router.parseUrl('/login') });
    const url = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url; //salvo il redirect ulr qui dentro

    const sessionID = 123456789;

    const navigationExtras:NavigationExtras ={
      queryParams:{session_id:sessionID},
      fragment:'anchor',
    }

    return this.router.createUrlTree(['/login'],navigationExtras); // convertire un url in uno string tree
  }
}
