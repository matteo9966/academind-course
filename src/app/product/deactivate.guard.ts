import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivatedComponent {
  canExit:()=>boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<IDeactivatedComponent> {
  canDeactivate(
    component: IDeactivatedComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit();
  }
}
