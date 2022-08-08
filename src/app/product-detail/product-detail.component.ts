import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }
  name="";
  id="";
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params=>{
      this.name=params.get('name')!;
      this.id=params.get('id')!;
    })


  }

}
