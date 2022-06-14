import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Subscription, take, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';
import { Recipe } from '../recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private authSub: Subscription | undefined;
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getRecipes() {

    return this.http.get<{ recipes: Recipe[] }>(
        'http://localhost:5002/recipes'
     
      );

    // return this.authenticationService.user$.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     console.log({exhaustMap:user})
    //     const token = user?.token?.toString() || '0'
    //     let headers = new HttpHeaders({'Authorization':token});

    //     // headers = headers.set('Authorization', user?.token || '0');
          

   
    //   })
    // );
  }
}
