import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { MyRouterModule } from './my-router/my-router.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
