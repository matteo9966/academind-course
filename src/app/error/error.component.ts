import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
errorMessage=""
  constructor(private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
  //  this.errorMessage=this.activatedRoute.snapshot.data['message'];
      this.activatedRoute.data.subscribe(data=>this.errorMessage=data['messaggio'])
  }

}
