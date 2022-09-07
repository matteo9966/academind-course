import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { globalReducer } from './globalStore/globalStore.interface';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth-store/auth.effects';
// import { reducer } from './store/reducers/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(globalReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
