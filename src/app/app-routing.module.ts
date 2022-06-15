import { NgModule } from '@angular/core';
import { PreloadAllModules,  RouterModule, Routes } from '@angular/router';
// import { ErrorPageComponent } from './error-page/error-page.component';
// import { RecipeBookComponent } from './recipe-book/recipe-book.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
// import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
// import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
// import { AuthComponent } from './Authentication/auth/auth.component';
// import { AuthGuard } from './Authentication/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'auth', component: AuthComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'ingredients',
    loadChildren: () =>
      import('./Modules/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./Modules/recipes.module').then((m) => m.RecipesModule),
  },
  // {
  //   path: 'recipes',
  //   canActivate:[AuthGuard],
  //   component: RecipeBookComponent,
  //   children: [
  //     { path: 'new', component: RecipeEditComponent },
  //     { path: ':id', component: RecipeDetailComponent },
  //     { path: ':id/edit', component: RecipeEditComponent },
  //     { path: '', component: NoRecipeComponent, pathMatch: 'full' },
  //   ],
  // },
  // { path: '**', component: ErrorPageComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], exports: [RouterModule] })
export class AppRouting {}
