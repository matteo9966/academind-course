import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

//1 definisco una intarfaccia per il componente che implementi canDeactivate canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

//2 definisco un service che implementa CanDeactivate con l'interfaccia definita nel punto 1
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) {
    return component.canDeactivate();
  }
}
