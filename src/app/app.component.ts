import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private authService:AuthenticationService){}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
  title = 'academind-course';

  activeRoute="";
  
  changeActiveRoute(route:string){
    this.activeRoute=route;

  }
}

