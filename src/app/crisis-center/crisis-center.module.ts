import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';



@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ],
  exports:[
   
  ]
})
export class CrisisCenterModule { }
