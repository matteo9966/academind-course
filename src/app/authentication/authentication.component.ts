import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction, LogoutAction } from '../auth-store/auth.actions';
import { GlobalStore } from '../globalStore/globalStore.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private store:Store<GlobalStore>) { }
  
  ngOnInit(): void {
    this.store.select('auth').subscribe(state=>{
      console.log({state});
    })  

  }
login(){
  this.store.dispatch(LoginAction({payload:{loggedIn:true,token:'token123',username:'matteeeeo'}}))
}
logout(){
  this.store.dispatch(LogoutAction());
}
}
