import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild('form', { static: false })
  authForm!: NgForm;
  signedUp: boolean = false;
  showDialog=false;
  errorMessage="";
  loginMode = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClickSignup() {
    this.loginMode = false;
  }
  onClickGoToLogin() {
    this.loginMode = true;
  }

  onSubmit() {
     if(this.loginMode){
      this.login();
     }
     else{
      this.signup();
     }
  }


  signup(){
    console.log(this.authForm.value);
    this.authenticationService
      .signup(
        this.authForm.value['email'],
        this.authForm.value['name'],
        this.authForm.value['password']
      )
      // .subscribe((response) =>{this.signedUp=response.added});
      .subscribe({
        next: (response) => {
          this.signedUp = response.added;
        },
        error: (err) => { this.errorMessage="Error: signup error, try later :(";
        this.showMessage(true)
      },
        complete: () => console.log('Observer got a complete notification'),
      });
  }

  login(){
    this.authenticationService
      .login(this.authForm.value['email'], this.authForm.value['password'])
      .subscribe({
        next: (response) => {
          if (response.authorized) {
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          console.log("recieved an error:",error)
          this.errorMessage="Error: login error, try later :("
          this.showDialog=true;
          
     
        },
      });
  }

  showMessage(show:boolean){
     this.showDialog=show;
  }

}
