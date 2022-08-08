import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  username$!:Observable<string|null>;

  ngOnInit(): void {

    this.username$ = this.route.paramMap.pipe(map((params:ParamMap)=>params.get('username')))

  }

}
