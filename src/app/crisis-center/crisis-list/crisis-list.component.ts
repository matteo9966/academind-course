import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis-center.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  constructor(
    private crisisService: CrisisService,
    private activatedRoute: ActivatedRoute
  ) {}
  selectetedId = 0;
  crisis$!: Observable<Crisis[]>;
  ngOnInit(): void {
    this.crisis$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectetedId = +params.get('id')!;
        return this.crisisService.getCrisis();
      })
    );
  }
}
