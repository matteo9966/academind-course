import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  
  constructor() { }
  text="";
  input_value="";
  people:string[]=[];
  person_created=false;
  ngOnInit(): void {
  }

  onChange(event:Event){

    const value = (<HTMLInputElement>event.target).value
    this.text=value;

  }
  onClickDisplay(){
    if(this.input_value.length==0) return
    this.addPersonToList(this.input_value);
    this.text=this.people.join(',');
    this.input_value="";
    this.person_created=true;
  }

  disableButton(){
    if(this.input_value.length===0) return true
    return false;
  }

  addPersonToList(person:string){
    this.people.push(person);
  }

  bgcolor(){
    if(this.people.length<2){
      return 'red'
    }else{
      return 'green'
    }
  }

}
