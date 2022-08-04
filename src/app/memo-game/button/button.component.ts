import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  private _colorbg=false;

  @Input() set colorBg(color:boolean){
      this._colorbg=color;
      this.showColor(700);
      console.log('changed color!')
  };
  get colorBg(){
    return this._colorbg;
  }


  @Input() id = -1;

  ngOnInit(): void {
  }
  showColor(time:number){
   setTimeout(()=>{
    this._colorbg=false;
   },time)
  }

}
