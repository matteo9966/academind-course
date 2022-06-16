import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { MainNavbarComponent } from './pages/main-navbar/main-navbar.component';
import { MainFooterComponent } from './pages/main-footer/main-footer.component';
import { AppRouterModule } from './app-router.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AUTHENTICATED } from './tokens';
import { FormsModule } from '@angular/forms';
import { PasswordValidatorDirective } from './directives/passwordValidator.directive';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    MainNavbarComponent,
    MainFooterComponent,
    HomePageComponent,
    UserProfileComponent,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    // RouterModule
    AppRouterModule,
    FormsModule,
  ],
  providers: [{ provide: AUTHENTICATED, useValue: false }],
  bootstrap: [AppComponent],
})
export class AppModule {}
