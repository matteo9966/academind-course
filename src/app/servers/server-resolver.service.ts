import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Server } from "./server.model";
import { ServersService } from "./servers.service";

@Injectable()
export class ServerResolver implements  Resolve<Server>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
       return this.serverService.getServer(+route.params['id'])! 
    }

    constructor(private serverService:ServersService){}
    
}