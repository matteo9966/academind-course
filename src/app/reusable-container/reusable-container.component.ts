import { Component, OnInit,ViewChild,ContentChild, AfterViewInit, ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-reusable-container',
  templateUrl: './reusable-container.component.html',
  styleUrls: ['./reusable-container.component.css']
})
export class ReusableContainerComponent implements OnInit,AfterViewInit,AfterContentInit {


  @ViewChild('title') titleContainer!:ElementRef<HTMLElement>;
  @ContentChild('header') headerElement!:ElementRef<HTMLElement>;

  @ContentChild('title') titleContainerSbagliato!:ElementRef<HTMLElement>;
  @ViewChild('header') headerElementSbagliato!:ElementRef<HTMLElement>;

  constructor() { 

  }
  ngAfterContentInit(): void {
    console.log('header element:',this.headerElement);
    console.log('title-container',this.titleContainer);
  }
  ngAfterViewInit(): void {
    console.group()
    console.log('header element:',this.headerElement);
    console.log('title-container',this.titleContainer);
    console.log('header element:',this.headerElementSbagliato);
    console.log('title-container',this.titleContainerSbagliato);
    console.groupEnd();
  }

  ngOnInit(): void {
  }

  

}
