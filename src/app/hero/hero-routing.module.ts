import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { heroRoutes } from './hero-routes';
const routes: Routes = [
  { path: heroRoutes.HERO_LIST, component: HeroListComponent },
  { path: heroRoutes.HERO_DETAIL, component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
