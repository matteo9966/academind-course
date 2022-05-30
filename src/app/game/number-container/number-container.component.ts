import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-container',
  templateUrl: './number-container.component.html',
  styleUrls: ['./number-container.component.css']
})
export class NumberContainerComponent implements OnInit {
  @Input('count-value') count=0;
  @Input() title="";
  @Input() bgColor="white";
  constructor() { }

  ngOnInit(): void {
  }

}
