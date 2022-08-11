import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
//un resolver è solo un service che viene chiamato quando serve
@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Crisis | Observable<Crisis> | Promise<Crisis> {
    //l'oggetto che deve essere utilizzato dal crisis detail
    const id = route.paramMap.get('id')!
    return this.crisisService.getCrisis(+id).pipe(mergeMap(crisis=>{
      if(crisis){
        return of(crisis);
      }
      else{
        this.router.navigate(['/crisis-center']);
        return EMPTY // se restituisco un observable vuoto non procede con la navigazione!
      }
    }))
  }
}
