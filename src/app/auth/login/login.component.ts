import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  message:string="";
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  getMessage(){
    return 'Logged' + this.authService.isLoggedIn? 'in' : 'out';
  }

  login(){
    console.log(this.authService.redirectUrl);
    this.message='trying to login!';
    this.authService.login().subscribe(()=>{
      this.message='Logged In!';
      const navigationExtras:NavigationExtras = {
        queryParamsHandling:'preserve',
        preserveFragment:true,
      }
      if(this.authService.redirectUrl){
        this.router.navigate([this.authService.redirectUrl],navigationExtras);
      }else{
        this.router.navigate(['']);
      };

    })
  }

  logout(){
    this.authService.logout();
    this.message = this.getMessage();
  }

}
