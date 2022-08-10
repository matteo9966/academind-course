import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute,private router:Router) { }
   loggedIn$!:Observable<boolean>;

  ngOnInit(): void {
   this.loggedIn$ = this.authService.loggedIn$;
  }



  clickLogout(){
    this.authService.logout();
    this.router.navigate(['home']);

  }

}
