import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  sessionId!: Observable<string>;
  token!: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sessionId = this.activatedRoute.queryParamMap.pipe(
      map((params) => params.get('session_id') || 'None')
    );
    this.token = this.activatedRoute.fragment.pipe(map(fragment=>fragment || 'None'))
  }
}
