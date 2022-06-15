import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { AuthGuard } from "../Authentication/auth-guard.service";
import { NoRecipeComponent } from "../recipe-book/no-recipe/no-recipe.component";
import { RecipeBookComponent } from "../recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "../recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-book/recipe-edit/recipe-edit.component";
const routes:Routes= [  {
    path: '', //lazy loaded
    canActivate:[AuthGuard],
    component: RecipeBookComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: '', component: NoRecipeComponent, pathMatch: 'full' },
    ],
  },]
console.log('recipes router module loaded')
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RecipesRoutingModule{

}