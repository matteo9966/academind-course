import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CrisisService } from './crisis-center.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Crisis | Observable<Crisis> | Promise<Crisis> {
    const id = route.paramMap.get('id')!;
    return this.crisisService.getSingleCrisis(+id).pipe(
      mergeMap(crisis=>{
        if(crisis){
          return of(crisis)
        }
        else{
          this.router.navigate(['/crisis-center']);
          return EMPTY
        }
      })
    )
  }
}
