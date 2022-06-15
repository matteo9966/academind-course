import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  { path: 'auth', component: RegistrationFormComponent },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
