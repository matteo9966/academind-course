import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  constructor(private crisisService:CrisisService,private route:ActivatedRoute) { }
  crisis$!:Observable<Crisis[]> 
  
  ngOnInit(): void {
    this.crisis$ = this.crisisService.getCrises();  

  }

}
