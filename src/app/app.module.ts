import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { actionReducerMap } from './Store/Store';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(actionReducerMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
