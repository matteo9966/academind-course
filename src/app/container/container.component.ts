import { Component, OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
// iport {AfterViewInit,ViewChild}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit,AfterViewInit {
  
  // seconds=0;
  constructor() { }
  ngAfterViewInit(): void {
     //quando inizializzo la view faccio vedere i seconds?
    //  setTimeout(()=>this.seconds=this.timerComponent.time,0)
    console.log({textArea:this.textArea})
  }

  partiti = ['rossi','verdi liberi', 'circolo polare'];
  loaded = false;
  ngOnInit(): void {
    setTimeout(()=>{
      this.loaded=true;
    },3000)
  }
  
  numeroVoti = 0;
  
  @ViewChild('txtarea') textArea!:ElementRef<HTMLTextAreaElement>;
  @ViewChild(TimerComponent) 
  private timerComponent!:TimerComponent;


  onvotato(votato:boolean){
     if(votato){
        ++this.numeroVoti;
     }
  }

  start(){
    this.timerComponent.start();
  }
  reset(){
    this.timerComponent.reset()
  }

  onChangeInput(event:Event){
    this.textArea.nativeElement.value=(<HTMLInputElement>event.currentTarget).value;
  }

}
