import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/server-resolver.service';
import { ResolveGuard } from './resolve-guard.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    // canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent ,resolve:{server:ServerResolver}},
      { path: ':id/edit', component: EditServerComponent,canDeactivate:[CanDeactivateGuard] },
    ],
  },
//   { path: 'not-found', component: NotFoundComponent },
  { path: 'not-found', component: ErrorComponent,resolve:{messaggio:ResolveGuard} },
  { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
