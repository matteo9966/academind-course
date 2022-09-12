import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../User.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userlist:IUser[] = []
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.userlist = this.activatedRoute.snapshot.data?.['userlist'] ?? [];
  }

}
