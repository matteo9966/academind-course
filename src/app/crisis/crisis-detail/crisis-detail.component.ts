import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { IDeactivableComponent } from 'src/app/can-deactivate.guard';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit, IDeactivableComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService
  ) {}

  onExit() {
    return of(confirm('do you want to leave the Crisis detail page ??'));
  }

  crisis!: Crisis;
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const id = params.get('id')!;
    //   this.crisisService
    //     .getCrisis(+id)
    //     .subscribe((crisis) => (this.crisis = crisis!));
    // });
    this.activatedRoute.data.subscribe((data) => {
      const crisis = data['crisis'];
      this.crisis = crisis;
    });
  }
}
