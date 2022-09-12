import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { UserComponent } from '../user/user.component';
import {RouterModule} from '@angular/router'
import { UsersListComponent } from '../user/users-list/users-list.component';
import { UserGuard } from './guards/UserGuard.service';
const routes:Routes = [{
  path:'',component:AuthenticationComponent
},{
  path:'user',component:UserComponent
},
{path:'users',component:UsersListComponent,resolve:{userlist:UserGuard}}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class MyRoutingModule { }
