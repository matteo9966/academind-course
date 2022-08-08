import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../routes/routes';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
   crisis_url = `/${AppRoutes.CRISIS_CENTER}`;
   heroes_url = `/${AppRoutes.HEROES_LIST}`;
  ngOnInit(): void {
  }

}
