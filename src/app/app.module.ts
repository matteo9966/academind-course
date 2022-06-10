import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { OpenDropdownDirective } from './directives/open-dropdown.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,
    OpenDropdownDirective,
    ReactiveFormComponent,
    ReactiveFormTestComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
