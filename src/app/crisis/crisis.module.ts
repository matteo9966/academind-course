import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisComponent } from './crisis/crisis.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisComponent,
    CrisisHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
