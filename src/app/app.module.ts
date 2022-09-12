import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { globalReducer } from './globalStore/globalStore.interface';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth-store/auth.effects';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MyRoutingModule } from './routing/routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UsersListComponent } from './user/users-list/users-list.component'; 
import { UsersEffects } from './user/UserStore/user.effects';

// import { reducer } from './store/reducers/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AuthenticationComponent,
    UserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(globalReducer),
    EffectsModule.forRoot([AuthEffects,UsersEffects]),
    MyRoutingModule,
    StoreDevtoolsModule.instrument({logOnly:environment.production}),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
