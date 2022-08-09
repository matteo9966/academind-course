import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { MyRouterModule } from './my-router/my-router.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
  ],
  //l'ordine dei moduli con il routing è importante , MyRouterModule contiene i wildCards
  imports: [BrowserModule, FormsModule,HeroesModule,CrisisCenterModule, AdminModule,MyRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
