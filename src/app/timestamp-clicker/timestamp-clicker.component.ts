import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp-clicker',
  templateUrl: './timestamp-clicker.component.html',
  styleUrls: ['./timestamp-clicker.component.css']
})
export class TimestampClickerComponent implements OnInit {

  constructor() { }
  show=true;
  list:{date:string,indx:number}[] = []
  ngOnInit(): void {
  }

  toggleShow(){
    this.show=!this.show;
    this.createTimeStamp();
  }

  createTimeStamp(){
    const date = new Date().toISOString();
    this.list.push({date:date,indx:this.list.length});
  }

}
