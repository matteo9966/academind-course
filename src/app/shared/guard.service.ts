import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

//questo guard lo uso nel routing module all array di canActivate
export class GuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }
    
}