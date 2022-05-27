import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  template:`<h1>this is the template inside the file</h1>
  <h2>this is another line</h2>
  <h5>something else</h5>`

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
