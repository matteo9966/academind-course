import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academind-course';

  activeRoute="";
  
  changeActiveRoute(route:string){
    this.activeRoute=route;

  }
}

