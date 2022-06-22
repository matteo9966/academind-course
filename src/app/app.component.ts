import { Component, OnInit } from '@angular/core';
import { AddressForm } from './Forms/address-form/address-form.component';
import { Customer } from './Forms/customer-form/customer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: AddressForm;
  address: Customer = {
    addressLine1: '',
    city: '',
    state: '',
    zip: '',
  };
  ngOnInit(): void {
  
    this.form=new AddressForm(this.address)
  }

  onSubmit(){
    console.log(this.form.value);
  }
    
  }
