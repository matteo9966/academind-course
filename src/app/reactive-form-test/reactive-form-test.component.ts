import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css'],
})
export class ReactiveFormTestComponent implements OnInit {
  projectForm: FormGroup;
  inputs:string|undefined;
  constructor() {
    this.projectForm = new FormGroup({
      project: new FormControl(null, [this.projectNameValidator.bind(this)]),
      mail: new FormControl(null,null,[this.emailValidator]),
      status: new FormControl(null),
    });
  }

  ngOnInit(): void {
    
  }

  projectNameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (/^task$/i.test(<string>control.value)) {
      return { invalidName: true };
    }
    return null;
  }

  emailValidator(control:AbstractControl):Promise<any>|Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      if(control.value==="email@e.it"){
        resolve({invalid:true})
      }
      resolve(null)
    })
    return promise
  }

  onSubmit(){
    this.inputs=JSON.stringify(this.projectForm.value);
    console.log(this.projectForm)
  }
}
