import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { CoursesComponent } from '../courses/courses.component';
import { CoursesCardsComponent } from '../courses/courses-cards/courses-cards.component';
import { CoursesListComponent } from '../courses/courses-list/courses-list.component';
import { CoursesCategoryComponent } from '../courses/courses-category/courses-category.component';
import { GuardService } from '../shared/guard.service';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate:[GuardService],
    children: [
      { path: '', component: CoursesCardsComponent },
      { path: ':id', component: CoursesCategoryComponent },
      {
        path: '',
        outlet: 'sidemenu',
        component: CoursesListComponent,
      },
      {
        path:':id',
        outlet:'sidemenu',
        component:CoursesListComponent
      }
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
