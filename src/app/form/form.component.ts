import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 comment="";
 @ViewChild('f', { static: true }) formComp:NgForm|undefined;
 states = [{name:'happy',emoji:'😊'},{name:'sad',emoji:'😥'}]

 user={email:'',password:'',state:'',comment:'',accept:false};
  constructor() { }
  
  ngOnInit(): void {
    console.log({form:this.formComp})
  }

  onSubmit(){
/* 
value: Object
accept: true
comment: "comm444"
email: "ada@ada.it"
password: "randompassword0.8529216105140878"
state: "happy" */
    this.user.email=this.formComp?.form.value['email']
    this.user.comment=this.formComp?.form.value['comment']
    this.user.password=this.formComp?.form.value['password']
    this.user.state=this.formComp?.form.value['state']
    this.user.accept=this.formComp?.form.value['accept']

  }

  suggestPassword(e:Event){
    e.preventDefault();
    this.formComp?.form.patchValue({password:'randompassword'+Math.random()})

  }

  resetForm(){
    this.formComp?.reset();
  }

}
