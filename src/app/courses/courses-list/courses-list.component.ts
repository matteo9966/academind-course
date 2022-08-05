import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(route:ActivatedRoute) {
    route.params.subscribe(params=>console.log(`the current menu is ${params['id']}`))
   }

  ngOnInit(): void {
  }

}
