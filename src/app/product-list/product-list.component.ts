import { Component, OnInit } from '@angular/core';

type item = { name: string; id: string };

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  list: item[] = [
    { id: '1', name: 'prod1' },
    { id: '2', name: 'prod2' },
    { id: '3', name: 'prod3' },
    { id: '5', name: 'prod5' },
    { id: '6', name: 'prod6' },
  ];
  constructor() {}

  get productURls(){
   return this.list.map(item=>`/${item.name}/${item.id}`)
  }

  ngOnInit(): void {}
}
