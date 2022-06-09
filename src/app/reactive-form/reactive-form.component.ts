import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
}
