import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string } | undefined;
  serverName: string | undefined = '';
  serverStatus: string | undefined = '';
  allowEdit: boolean = false;
  changesSaved = false;
  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  canDeactivate() {
    if (!this.allowEdit) return true;
    if (
      this.serverName !== this.server?.name ||
      this.serverStatus !== this.server?.status
    ) {
      return confirm('Discard the changes?');
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // this.serverName=params['name'];
      // this.server?.id=params
      console.log(params);
    });
    this.activatedRoute.fragment.subscribe((frag) => console.log(frag));
    this.activatedRoute.queryParams.subscribe((queryparams) =>
      console.log(queryparams)
    );
    // this.
    this.server = this.serversService.getServer(1);
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    if (this.server && this.serverName && this.serverStatus)
      this.serversService.updateServer(this.server?.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
