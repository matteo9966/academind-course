import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-astronout',
  templateUrl: './astronout.component.html',
  styleUrls: ['./astronout.component.css']
})
export class AstronoutComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
