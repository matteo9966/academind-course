import { Component } from '@angular/core';
import { Server } from './servers.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'medium',
      name: 'Production',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'medium',
      name: 'serv',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'adelfio',
      name: 'adelfio',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'medium',
      name: 'dock',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'medium',
      name: 'Production2',
      started: new Date(),
      status: 'stable',
    },
    {
      instanceType: 'high',
      name: 'Production3',
      started: new Date(),
      status: 'stable',
    },
  ];
  constructor() {
    this.filterMethod = this.filterMethod.bind(this);
  }

  filterWord = '';

  filterMethod(word:string) {

    return (value:Server) => value.name.toLocaleLowerCase().includes(word);
  }
}
