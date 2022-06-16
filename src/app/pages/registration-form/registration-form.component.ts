import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRegistration } from './user-registration.model';

/* 
Esempio di form

cognome: "Tommasi"
confirm-passord: "qwerty1"
email: "ada@ada.it"
nome: "Matteo"
password: "qwerty1"
termsAndConditions: true

*/
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  user = new UserRegistration('', '', '', '');
  passwordConfirm: string = '';
  termsAndConditions: boolean = false;
  @ViewChild('regForm', { static: false }) registrationForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registrationForm);
  }
}
