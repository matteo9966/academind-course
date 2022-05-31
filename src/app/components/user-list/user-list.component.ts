import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/counter.service';
import { UserService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  
  users: { name: string; status: string }[]=[]
  count =0;
  
  constructor(private userservice: UserService,private countservice:CountService) {
    this.countservice.updateCount.subscribe(()=>this.count++);
  }

  ngOnInit(): void {
    this.users = this.userservice.users
   
  }

  changeStatus(index: number) {
    const user = this.users[index];
    if (!user) return;
    const userstat = user.status;
    let newstat = '';
    if (userstat === 'inactive') newstat = 'active';
    else newstat = 'inactive';
    this.userservice.changeUserStatus(index, newstat);
    
  }
  
  getInactiveUsers(){
    return this.users.filter(usr=>usr.status=='inactive')
  }
  
  getActiveUsers(){
    return this.users.filter(usr=>usr.status=='active')
  }
  

}
