import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CountService } from './services/counter.service';
import { UserService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
