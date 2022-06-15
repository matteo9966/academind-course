import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AlertComponent } from "../alert/alert.component";
import { AuthInterceptorService } from "../Authentication/auth-interceptor";
import { RecipeService } from "../recipe-book/services/recipe.service";
import { ShoppingListService } from "../shopping-list/services/shoppingList.service";

@NgModule({
  providers:[
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },] ,
    declarations:[ AlertComponent,],
    exports:[AlertComponent]
})
export class CoreModule{

}