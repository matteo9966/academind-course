import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CrisisModule } from './crisis/crisis.module';
import { HeroModule } from './hero/hero.module';
import { MyRoutingModule } from './my-routing/my-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComposeMessageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // CrisisModule, //faccio il load di crisis module con un lazy strategy
    HeroModule,
    // AdminModule, //rimuovo admin module da qui perche viene caricato con un lazy load
    AuthModule,
    MyRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key:any, value:any) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
