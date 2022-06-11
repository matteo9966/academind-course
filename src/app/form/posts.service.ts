import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl: string = 'http://192.168.1.178:5001';
  constructor(private http: HttpClient) {}
  posts$ = new BehaviorSubject<Post[]>([]);
  loading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject({ error: false, errorMessage: '' });
  createAndStorePost() {}

  getPosts() {
    this.loading$.next(true);
    this.clearError();
    this.http.get<Post[]>(this.apiUrl + '/posts',{headers: new HttpHeaders({
    })}).subscribe((posts) => {
      this.posts$.next(posts);
      this.loading$.next(false);
    },(error:any)=>{
       this.loading$.next(false);
       this.error$.next({error:true,errorMessage:"error getting posts"+error.message})
    });
  }

  deleteComment(id: number) {
    this.loading$.next(true);
    this.clearError();
    this.http.delete<Post[]>(this.apiUrl + '/posts/delete?id=' + id).subscribe(
      (posts) => {
        this.posts$.next(posts);
        this.loading$.next(false);
      },
      (error: any) => {
        this.loading$.next(false);
        this.error$.next({
          error: true,
          errorMessage: 'deleteComment went wrong' + error?.message,
        });
      }
    );
  }


  clearError(){
    this.error$.next({
      error:false,
      errorMessage:''
    })
  }
}
