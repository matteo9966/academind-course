import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private serverService: ServersService,
    private router: Router
  ) {}
  id = -1;
  server: Server | undefined;
  ngOnInit(): void {
    
    this.activateRoute.data.subscribe((data:Data)=>this.server=data['server']);

    // this.activateRoute.params.subscribe((params) => {
    //   this.id = params['id'];
    //   this.server = this.serverService.getServer(+this.id);
    // });
  }
  onEdit() {
    this.router.navigate(['/servers', this.id, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
