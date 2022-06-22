import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from './customer.model';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  customer: Customer;
  constructor(private fb: FormBuilder) {
    this.customer = { addressLine1: '', city: '', state: '', zip: '' };
    this.form = this.fb.group({
      address:[this.customer.addressLine1,],
      city:[this.customer.city,],
      state:[this.customer.state,],
      zip:[this.customer.zip,],
    })
  }

  ngOnInit(): void {}
}
