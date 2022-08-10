import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  {path:'admin',component:ProfileComponent, canActivate:[AuthGuard]},
  {path:'user',component:ProfileComponent, canActivate:[AuthGuard],},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MyRouterModule {}
