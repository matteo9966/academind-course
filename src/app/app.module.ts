import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChooseQuantityInputComponent } from './choose-quantity-input/choose-quantity-input.component';
import { FormCustomInputComponent } from './form-custom-input/form-custom-input.component';
import { CustomFormComponent } from './complete-custom-form/custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseQuantityInputComponent,
    FormCustomInputComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
