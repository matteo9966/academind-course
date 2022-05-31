import { Injectable } from "@angular/core";
import { CountService } from "./counter.service";


@Injectable()
export class UserService{
    
     users = [
         {name:"matteo",status:"active"},
         {name:"giuseppe",status:"active"},
         {name:"gambino",status:"active"},
         {name:"teodoro",status:"active"},
         {name:"roosvelt",status:"active"},
         {name:'gambino',status:'inactive'},
         {name:'gioele',status:'inactive'},
         {name:'teresa',status:'inactive'},
         {name:'fabia',status:'inactive'},
         {name:'germano',status:'inactive'},
    ]
    // count=this.counterservice.count;
    constructor(private counterservice:CountService){
        // this.counterservice.updateCount.subscribe(()=>{this.count++});
    }

     
    //quando clicco su un user devo rimuoverlo e metterlo nel altra lista
    
    changeUserStatus(index:number,status:string){
        this.users[index].status=status;
        this.counterservice.updateCount.emit();
        // this.counterservice.updateCount();
    
    }


}