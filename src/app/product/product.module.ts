import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [AddProductComponent, ProductListComponent, ProductComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
