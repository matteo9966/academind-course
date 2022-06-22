import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from 'src/app/Forms/customer-form/customer-form.component';
import { TextInputComponent } from 'src/app/Forms/text-input/text-input.component';
import { ErrorMessagesPipe } from 'src/app/Pipes/error-messages.pipe';
import { CustomerAddressComponent } from 'src/app/Forms/address-form/component/customer-address/customer-address.component';

@NgModule({
  declarations: [
    CustomerFormComponent,
    TextInputComponent,
    ErrorMessagesPipe,
    CustomerAddressComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextInputComponent, ErrorMessagesPipe, CustomerAddressComponent],
})
export class MyFormsModule {}
