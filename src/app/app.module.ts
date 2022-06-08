import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ServersService } from './servers/servers.service';
import { AuthService } from './authService.service';
import { AuthGuardService } from './auth-guard.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/server-resolver.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { ResolveGuard } from './resolve-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [ BrowserModule, FormsModule,AppRoutingModule],
  providers: [ServersService,AuthService,AuthGuardService,ServerResolver,CanDeactivateGuard,ResolveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
