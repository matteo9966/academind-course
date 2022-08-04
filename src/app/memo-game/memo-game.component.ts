import { Component, OnInit, QueryList, ViewChildren,AfterViewInit } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-memo-game',
  templateUrl: './memo-game.component.html',
  styleUrls: ['./memo-game.component.css'],
})
export class MemoGameComponent implements OnInit,AfterViewInit {
  constructor() {}
  list:number[]=[]
  
  //seleziono tutti i bottoni con viewChildren
  @ViewChildren(ButtonComponent)
  childrenButtons!:QueryList<ButtonComponent>;
  
  ngOnInit(): void {
    this.list=this.generateList();
    console.log(this.list);
  }
  
  ngAfterViewInit(): void {
    //prendo ogni child con quel id e gli applico lo stile
    this.colorButtons();
    
  }

  colorButtons(){
    let index = 0 ; 
    let length = 10;
    let list  = this.list;
    let childBtns = this.childrenButtons;
    function iterate(){
      console.log({index})
      if(index >= length){
        return
      }
      setTimeout(()=>{
        let pick = Math.floor(Math.random()*26); //0 a 25
        let id = list[pick];
        console.log(id);
        let child= childBtns.find(child=>child.id===id);
        child && (child.colorBg = true);
        index++;
        iterate();
      },600);
    }
    iterate();
  }
 
  generateList() {
    let list = []
    for (let i = 0; i < 25; i++) {
       list.push(i);
    }
    return list.sort((el,el1)=>Math.random() - 0.5);
  } //genera una lista casuale.



}
