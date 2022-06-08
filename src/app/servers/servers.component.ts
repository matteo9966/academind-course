import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from './server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:Server[] = []
  constructor(private router:Router,private route:ActivatedRoute,private serverService:ServersService) { }

  ngOnInit(): void {
    this.servers=this.serverService.getServers();
  }
   
  onReloadServers(){
    this.router.navigate(['/servers'],{relativeTo:this.route})
  }
}
