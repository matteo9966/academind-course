import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-custom-input',
  templateUrl: './form-custom-input.component.html',
  styleUrls: ['./form-custom-input.component.css']
})
export class FormCustomInputComponent implements OnInit {
  
  form!:FormGroup;
  constructor(private builder:FormBuilder) { 
      this.createForm();
  }


  ngOnInit(): void {
  }

  createForm(){
   this.form= this.builder.group({
    quantity:[20,[Validators.required,Validators.max(200)]]
   })
  }

  onSubmit(){
    console.log(this.form.value);
    console.log(this.form.errors);
    console.log(this.form.valid);
  }

}
