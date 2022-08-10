import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Product } from './Product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList$= new BehaviorSubject<Product[]>([]);
  
  createRandomProducts(){
    for(let i = 0 ; i<20 ; i++){
      this.products.push({name:`product${i}`,price:i*100})
    }
  }
  products:Product[]=[]
  
  constructor() {
    this.createRandomProducts();
  }
  
  addProduct(product: Product) {
    const prevProducts  = this.productList$.value as Product[];
     this.productList$.next([product,...prevProducts]);
     this.products.push(product)
  }

  getProducts(){
  return of(this.products).pipe(delay(700));
  }
}
