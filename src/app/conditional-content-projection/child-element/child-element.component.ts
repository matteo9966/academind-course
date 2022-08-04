import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.css']
})
export class ChildElementComponent implements OnInit {
 
  @Input() items:any[]=[];
  @Input() itemTemplate!:TemplateRef<HTMLElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
