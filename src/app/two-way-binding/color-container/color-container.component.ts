import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-container',
  templateUrl: './color-container.component.html',
  styleUrls: ['./color-container.component.css']
})
export class ColorContainerComponent implements OnInit {

  constructor() { }

  redValue:number=0;
  blueValue:number=0;
  yellowValue:number=0;


  ngOnInit(): void {
  }

}
