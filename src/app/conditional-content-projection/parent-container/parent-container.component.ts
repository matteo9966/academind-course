import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.css'],
})
export class ParentContainerComponent implements OnInit {
  @ViewChild('cardTemplate',{static:true}) cardTemplate!:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate',{static:true}) listTemplate!:TemplateRef<HTMLElement>;
  items = [
    { name: 'oggetto1', description: 'lorem12345' },
    { name: 'oggetto2', description: 'lorem12345' },
    { name: 'oggetto3', description: 'lorem12345' },
    { name: 'oggetto4', description: 'lorem12345' },
  ];


  get selectedTemplate(){
    //metti qualche condizione qui dentro
    return this.cardTemplate;
  }

  constructor() {}

  ngOnInit(): void {}
}
