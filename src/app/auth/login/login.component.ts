import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  redirectedURL: string | null = null;

  ngOnInit(): void {
    //se vengo reindirizzato passo un parametro per dire da dove sono stato reindirizzato
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.redirectedURL = params.get('redirectedFrom');
      console.log(`redirected from this url ${this.redirectedURL}`);
    });
  }

  onClickLogin() {
    this.authenticationService.login().subscribe((auth) => {
      //faccio il redirect a dashboard di user normale
     
        if (this.redirectedURL) {
          this.router.navigate([this.redirectedURL]);
          return;
        }
        this.router.navigate(['../user'], { queryParams: { user: 'user' } });
    
    });
  }

  onClickLoginAsAdmin() {
    this.authenticationService.loginAsAdmin().subscribe((auth) => {
      //faccio il redirect al dashboard di admin
     
        this.router.navigate(['../admin'], { queryParams: { user: 'admin' } });
      
    });
  }
}
