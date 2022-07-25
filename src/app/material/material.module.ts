import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
const materialComponents = [MatIconModule,MatButtonModule,MatSidenavModule,MatToolbarModule,MatListModule]

@NgModule({

  imports:materialComponents ,
  exports:materialComponents,
})
export class MaterialModule { }
