import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { addressFields } from './custom-form-fields.enum';
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomFormComponent,
      multi: true,
    },
    { provide: NG_VALIDATORS,
       multi: true, 
       useExisting: CustomFormComponent
       },
  ],
})
export class CustomFormComponent implements OnInit,ControlValueAccessor,Validator,OnDestroy {
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
  }
  ngOnDestroy(): void {
    this.onChangeSubs.forEach(sub=>sub.unsubscribe());
  }
  form!:FormGroup;
  formProps=addressFields;
  onChange=()=>{};
  onTouched=()=>{};
  onChangeSubs: Subscription[] = [];

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.form.valid) return null;
    let errors:any={};
    errors = this.addControlErrors(errors,addressFields.ADDRESS);
    errors = this.addControlErrors(errors,addressFields.ADDRESS1);
    errors = this.addControlErrors(errors,addressFields.NUMBER);
    errors = this.addControlErrors(errors,addressFields.ROAD);
    errors = this.addControlErrors(errors,addressFields.ZIP);
    return errors;
  }

  writeValue(value: any): void {
    if(value){
      this.form.setValue(value,{emitEvent:false}) // a cosa serve emit event?
    }
  }

  registerOnChange(onChange: any): void {
    const sub = this.form.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
    
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled:boolean){
    disabled && this.form.disable();
    !!disabled && this.form.enable();
  }

  ngOnInit(): void {
   
  }

  createForm(){
    this.form=this.formBuilder.group({
      [addressFields.ADDRESS]:['',Validators.required],
      [addressFields.ADDRESS1]:['',Validators.required],
      [addressFields.NUMBER]:['',Validators.required],
      [addressFields.ZIP]:['',Validators.required],
      [addressFields.ROAD]:['',Validators.required],

    })
  }
  addControlErrors(allErrors:any,controlName:string){
    const errors = {...allErrors}
    const controlErrors = this.form.controls[controlName].errors; // vedo se c'è un errore con quel control name, se c'è lo aggiungo alla lista
    if(controlErrors){
      errors[controlName]=controlErrors;
    }
    return errors
  }

}
