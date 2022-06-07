import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit,OnDestroy {
  user: { name: string; id: number } ={name:"",id:0}
  subrscription:Subscription|undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };
  this.subrscription=this.route.params
        .subscribe(
          (params)=>{
            this.user.id=params['id'];
            this.user.name=params['name'];
          }
        );
  }

  ngOnDestroy(): void {
    this.subrscription?.unsubscribe();
  }
}
