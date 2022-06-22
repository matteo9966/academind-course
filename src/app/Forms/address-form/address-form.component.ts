import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer-form/customer.model';


//questa non è un componente di angular ma solo un modo di creare un form group 
export class AddressForm extends FormGroup {
  readonly addressLine1:FormControl;
  readonly city:FormControl;
  readonly state:FormControl;
  readonly zip: FormControl;

  constructor(
    readonly model: Customer,
    readonly fb: FormBuilder = new FormBuilder()
  ) {
    super(fb.group({
      addressLine1:[model.addressLine1],
      city:[model.city],
      state:[model.state],
      zip:[model.state], // è possibile aggiungere un array di validators
    }).controls);
     
    this.addressLine1= this.get('addressLine1')! as FormControl;
    this.city= this.get('city')! as FormControl;
    this.state=this.get('state')! as FormControl;
    this.zip=this.get('zip')! as FormControl;

  }
}
