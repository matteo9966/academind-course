import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeBookComponent } from './recipe-book/recipe-book.component';
// import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './directives/dropdown.directive';
// import { ShoppingListService } from './shopping-list/services/shoppingList.service';
import { AppRouting } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
// import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
// import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HoverHighlightDirective } from './directives/hover-highlight.directive';
// import { RecipeService } from './recipe-book/services/recipe.service';
import { HttpClientModule,
  //  HTTP_INTERCEPTORS
   } from '@angular/common/http';
// import { AuthComponent } from './Authentication/auth/auth.component';
// import { AuthInterceptorService } from './Authentication/auth-interceptor';
// import { AlertComponent } from './alert/alert.component';
// import { RecipesModule } from './Modules/recipes.module';
import { DirectivesModule } from './Modules/directives.module';
// import { ShoppingListModule } from './Modules/shopping-list.module';
import { CoreModule } from './Modules/core.module';
// import { AuthModule } from './Modules/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ShoppingListComponent,

    // ShoppingEditComponent,
    // DropdownDirective,
    ErrorPageComponent,

    // HoverHighlightDirective,
    // AuthComponent,
    // AlertComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RecipesModule,
    // ShoppingListModule,
    DirectivesModule,
    // AuthModule,
  ],
  providers: [
    // ShoppingListService,
    // RecipeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
