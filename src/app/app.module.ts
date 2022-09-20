import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { actionReducerMap } from './Store/Store';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookModule } from './book/bookModule/book.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // BookComponent,
    // BookFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(actionReducerMap),
    BookModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
