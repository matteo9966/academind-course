import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
 @Output() activeRoute = new EventEmitter<string>(); ;

  loggedIn = false;
  subscription!:Subscription;

 constructor(private authenticationService:AuthenticationService) {

   
}
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }



ngOnInit(): void {
  this.subscription=this.authenticationService.user$.subscribe(user=>{
    if(user?.token){
      this.loggedIn=true;
    }else{
      this.loggedIn=false;
    }
  })
  
  }

  goToRecipes(){
    this.changeActiveRoute('recipes')
  }
  goToShoppingList(){
    this.changeActiveRoute('shopping-list')
  }

  changeActiveRoute(route:string){
    this.activeRoute.emit(route);
  }

  onLogout(){
     this.authenticationService.logout();
  }


}
