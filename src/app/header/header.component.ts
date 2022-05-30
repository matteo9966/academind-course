import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() activeRoute = new EventEmitter<string>(); ;
  constructor() { }

  ngOnInit(): void {
    
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


}
