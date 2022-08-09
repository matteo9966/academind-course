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
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.canActivate(childRoute,state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean|UrlTree {
     const url = state.url;
     return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    if(this.authService.isLoggedIn){
      return true;
    }
    this.authService.redirectUrl=url;
    return this.router.parseUrl('/login');

    /* 

    ESEMPIO DI URL TREE:

    const tree: UrlTree =
    router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
    const f = tree.fragment; // return 'fragment'
    const q = tree.queryParams; // returns {debug: 'true'}
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
    g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
    g.children['support'].segments; // return 1 segment 'help'
    
    */

  }
}
