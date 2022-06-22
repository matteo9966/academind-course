import { Component, Input, OnInit } from '@angular/core';
import { AddressForm } from '../../address-form.component';

@Component({
  selector: 'app-customer-address-form',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {
  @Input() form!: AddressForm;
  constructor() { }
  
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.value);
  }
}
