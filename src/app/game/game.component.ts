import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
  constructor() { }
  count=0;
  evenCount =0;
  oddCount=0;
  intervalId:any=null;
  ngOnInit(): void {
    // this.startCounter();
  }


  onClickStop(){
    this.stopCounter();

    const evenNumbers  = Math.floor(this.count/2) +1
    const oddNumbers = Math.floor(this.count/2);
    this.evenCount=evenNumbers;
    this.oddCount=oddNumbers;

  }

  onClickStart(){
     this.startCounter();
  }

  startCounter(){
    this.oddCount=0;
    this.evenCount=0;
    console.log(this.count);
    if(this.intervalId){
      clearInterval(this.intervalId)
      this.count=0;
      this.intervalId=null;
    }
    this.intervalId=setInterval(()=>this.count=this.count+1,1000)
  }

  stopCounter(){
    if(this.intervalId){
      clearInterval(this.intervalId);
      this.intervalId=null;
    }
  }



}
