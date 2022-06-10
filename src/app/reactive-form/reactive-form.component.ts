import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenUsers = ['super', 'admin'];
  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email],[this.forbiddenEmails.bind(this)]),
      gender: new FormControl('male'),
      others: new FormGroup({
        colore: new FormControl(null),
        animale: new FormControl(null),
      }),
      hobbies: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }
  getHobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenUsers.includes(control.value)) {
      return { nameForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control:AbstractControl): Promise<any>|Observable<any> {
    const promise  = new Promise<any>((resolve,reject)=>{
       setTimeout(() => {
          if(control.value==='e@e.it'){resolve({'emailisForbidden':true})}
          resolve(null)
       }, 4000);
    })
    return promise
  }
}
