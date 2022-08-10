import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolveService implements Resolve<any> {

  constructor(private router:Router,private productService:ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.productService.getProducts();
  }
}
