import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../Authentication/auth-guard.service";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";

const routes:Routes=[{ path: '', component: ShoppingListComponent,canActivate:[AuthGuard], },];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShoppingListRoutingModule{

}