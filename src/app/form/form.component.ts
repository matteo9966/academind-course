import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  posts: any[];
  loading = false;
  fetching = false;
  error = false;
  errorMessage = '';
  postsSubscription: Subscription | undefined;
  loadingSubscription: Subscription | undefined;
  errorSubscription: Subscription | undefined;
  apiUrl: string = 'http://192.168.1.178:5001';
  constructor(private http: HttpClient, private postService: PostsService) {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.minLength(10)),
    });
    this.posts = [];
  }

  ngOnInit(): void {
    this.postsSubscription = this.postService.posts$.subscribe(
      (posts) => (this.posts = posts)
    );
    this.loadingSubscription = this.postService.loading$.subscribe(
      (loading) => (this.loading = loading)
    );
    this.errorSubscription = this.postService.error$.subscribe((error) => {
      this.error = error.error;
      this.errorMessage = error.errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscription?.unsubscribe();
    this.loadingSubscription?.unsubscribe();
    this.errorSubscription?.unsubscribe();
  }

  onSubmit() {
    console.log(this.postForm.value);
    const post = { ...this.postForm.value };
    this.http
      .post(this.apiUrl + '/post', post, {
        headers: new HttpHeaders({
          
        }), observe:'response'
      })
      .subscribe((response) => console.log(response));
  }

  loadComments() {
    this.loading = true;
    this.postService.getPosts();
  }

  deleteComment(id: number) {
    this.postService.deleteComment(id);
  }
}
