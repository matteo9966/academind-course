import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  submitted=false;
  values:string[]=[];
  constructor() { }
 @ViewChild('f',{static:true}) form:NgForm|undefined;
  ngOnInit(): void {
    console.log(this.form)
  }
  
  onSubmit(){
    this.submitted=true;
    this.values=Object.values(this.form?.form.value)
  }
}
