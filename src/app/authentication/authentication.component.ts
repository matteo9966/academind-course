import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction, LogoutAction } from '../auth-store/auth.actions';
import * as AUTHactions from '../auth-store/auth.actions';
import { GlobalStore } from '../globalStore/globalStore.interface';
import { loadingStartAction } from '../ui-store/ui.actions';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor(private store: Store<GlobalStore>) {}

  name: string = '';
  id = 1;
  subscribed = false;
  loading = false;
  loginName = {name:""};
  loggedIn=false;
  loggedInUsername="";

  ngOnInit(): void {
    this.store.select('auth').subscribe((state) => {
      console.log({ state });
      this.subscribed = state.subscribed;
      this.loggedIn=state.isLoggedIn;
      this.loggedInUsername = state.isLoggedIn?state.username:""
    });

    this.store.select('ui').subscribe((state)=>{
      console.log({state});
      this.loading = state.loading;
    })

  }
  login() {
    this.store.dispatch(
      LoginAction({
        payload: { loggedIn: true, token: 'token123', username: 'matteeeeo' },
      })
    );
  }
  logout() {
    this.store.dispatch(LogoutAction());
  }

  generateNameAndPassword() {
    let nomi = [
      'jonny',
      'filippo',
      'tizio',
      'biondo',
      'ramona',
      'caio',
      'tereso',
      'mimino',
      'rodolfo',
      'cici',
      'renato',
      'mattei',
      'ferdinando',
      'anselmo',
      'nicolino',
      'gattuso',
      'feder',
      'nadal',
      'chiesa',
      'fabri',
      'capa',
      'ugo',
      'tonio',
      'mimetto',
    ];
    this.name =
      'nome-' +
      nomi[Math.floor(Math.random() * nomi.length)] +
      Math.round(Math.random() * 10000);
    this.id = Math.floor(Math.random() * 1000 + 1);
  }

  subscribeUser() {
    this.store.dispatch(loadingStartAction());

    let user = { name: this.name, id: this.id };
    this.store.dispatch(AUTHactions.subscribeStart({payload:{user}}))
  }

  onSubmit(){
    this.store.dispatch(loadingStartAction());
    this.store.dispatch(AUTHactions.loginStart({payload:{name:this.loginName.name}}))
  }
}
