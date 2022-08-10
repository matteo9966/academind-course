import { Component, OnInit } from '@angular/core';
import { IDeactivatedComponent } from '../deactivate.guard';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit,IDeactivatedComponent {
  constructor(private productService: ProductService) {}

  name = '';
  price = 0;

  ngOnInit(): void {}

  onSubmitProduct() {
    this.productService.addProduct({ name: this.name, price: this.price });
    this.name='';
    this.price=0;
  }
  
  canExit():boolean{
    if(confirm('do you want to leave the input form?')){
      return true
    }
    return false
  }
}
