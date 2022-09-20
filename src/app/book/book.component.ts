import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from './Store/book.reducer';
import { selectBooksByAuthor } from './Store/book.selectors';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  booksOfUser$!:Observable<IBook[]>
  constructor(private store:Store) { }
  
  ngOnInit(): void {

    this.booksOfUser$ = this.store.select(selectBooksByAuthor)
  }

}
