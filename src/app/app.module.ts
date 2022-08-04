import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRouterModule } from './router/router.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CoursesCardsComponent } from './courses/courses-cards/courses-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseCardComponent,
    CoursesCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
