import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormsModule } from './Modules/forms/forms.module';
// import { CustomerAddressComponent } from './Forms/address-form/component/customer-address/customer-address.component';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
