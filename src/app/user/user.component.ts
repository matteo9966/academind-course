import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserUsername } from './UserSlice/user.selector';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username$!:Observable<string>;
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.username$ = this.store.select(selectUserUsername)

  }

}
