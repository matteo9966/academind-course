import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuard } from '../admin/product.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { DeactivateGuard } from './deactivate.guard';
import { ProductListResolveService } from './product-list-resolve.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,

    canActivateChild: [ProductGuard],
    children: [
      {
        path: 'list',
        component: ProductListComponent,
        resolve: { list: ProductListResolveService },
      },
      {
        path: 'new',
        component: AddProductComponent,
        canDeactivate: [DeactivateGuard],
      },
      {path:'list-resolver',
       component:ProductListComponent,
       resolve:{list:ProductListResolveService},  
    }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
