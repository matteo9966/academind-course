import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  constructor(private router:Router) { }

  details=""
  message=""
  sending=false

  ngOnInit(): void {
  }
  send(){
    this.sending=true;
    this.details='Sending message';
    setTimeout(()=>{
      this.sending=false;
      this.closepopup();
    },1000)
  }
  cancel(){
    this.closepopup();
  }

  closepopup(){
    this.router.navigate([{outlets:{popup:null}}]) // chiudi il popup passando null come valore del componente dell ooutlet
  }

 //continua da qui domani : https://angular.io/guide/router-tutorial-toh#displaying-multiple-routes-in-named-outlets

}
