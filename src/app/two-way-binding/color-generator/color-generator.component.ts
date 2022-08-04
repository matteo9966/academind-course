import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-generator',
  templateUrl: './color-generator.component.html',
  styleUrls: ['./color-generator.component.css']
})
export class ColorGeneratorComponent implements OnInit {

  constructor() {

    this.changeRed = this.changeRed.bind(this);
    this.changeBlue = this.changeBlue.bind(this);
    this.changeYellow = this.changeYellow.bind(this);

   }

  @Input() red=0;
  @Input() blue=0;
  @Input() yellow=0;
 
  @Output() redChange = new EventEmitter<number>();
  @Output() blueChange = new EventEmitter<number>();
  @Output() yellowChange = new EventEmitter<number>();
  
  changeRed(event:Event){
    const value = (<HTMLInputElement>event.currentTarget).value;
    this.red=this.changeColor(+value,this.redChange);
  }
  changeBlue(event:Event){
    const value = (<HTMLInputElement>event.currentTarget).value;
    this.blue=this.changeColor(+value,this.blueChange);
  }
  changeYellow(event:Event){
    const value = (<HTMLInputElement>event.currentTarget).value;
   this.yellow=this.changeColor(+value,this.yellowChange);
  }
  
  private changeColor(value:number,emitter:EventEmitter<number>){
    console.log(value);
      emitter.emit(value);
      return value;
  }

  ngOnInit(): void {
  }

}
