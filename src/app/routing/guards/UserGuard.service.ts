import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, Observable, of, switchMap, take, tap } from "rxjs";
import { GlobalStore } from "src/app/globalStore/globalStore.interface";
import { IUser } from "src/app/user/User.interface";
import * as userActions from '../../user/UserStore/user.actions';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate,Resolve<IUser[]>{
    
    
    constructor(private store:Store<GlobalStore>,private action$:Actions){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser[] | Observable<IUser[]> | Promise<IUser[]> {
        // return of([{name:'matteo',id:1},{name:'matteo2',id:2},{name:'matteo3',id:3}])
        return this.store.select('users').pipe(

            take(1),
          
            map(users=>{console.log({users});return users.users}),

            switchMap(users=>{
            // if(users.length>0){
            //     return of(users)
            // }
         
            this.store.dispatch(userActions.getUsersStartAction());
            return this.action$.pipe(
                ofType(userActions.getUsersCompleteAction),
                tap(()=>{console.log('userActionsComplete è stato chiamato')}),
                take(1),

                switchMap(users=>{return of(users.payload.users)})

            )

         }))
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const authSlice = this.store.select('auth');
        // return authSlice.
        return true
    }
    
}