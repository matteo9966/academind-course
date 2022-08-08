import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../routes/routes';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
const routes: Routes = [
  {
    path: AppRoutes.CRISIS_CENTER,
    component: CrisisListComponent,
  },
  { path: AppRoutes.HEROES_LIST, component: HeroesListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class MyRouterModule {}
