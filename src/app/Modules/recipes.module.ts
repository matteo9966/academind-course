import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { DropdownDirective } from '../directives/dropdown.directive';
import { NoRecipeComponent } from '../recipe-book/no-recipe/no-recipe.component';
import { RecipeBookComponent } from '../recipe-book/recipe-book.component';
import { RecipeDetailComponent } from '../recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipe-book/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from '../recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../recipe-book/recipe-list/recipe-list.component';
import { DirectivesModule } from './directives.module';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    NoRecipeComponent,
    RecipeEditComponent,
    // DropdownDirective
  ],
  imports: [
    // RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    RecipesRoutingModule,
  ],
  exports: [
    //tutti i moduli che importano recipesmodule possono usare questi componenti
    // RecipeBookComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // NoRecipeComponent,
    // RecipeEditComponent,
  ],
})
export class RecipesModule {}
