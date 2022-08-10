import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  products:Product[]=[]
  ngOnInit(): void {

    if(this.activatedRoute.snapshot.url[0].path==='list'){
      this.productService.getProducts().subscribe(prods=>this.products=prods);
    }else{

      this.products = this.activatedRoute.snapshot.data['list']

    }
    
    // this.productService.productList$.subscribe(products=>{
    //    this.products=products;
    // })
  }

}
