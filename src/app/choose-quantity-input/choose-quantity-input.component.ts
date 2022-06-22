import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-choose-quantity-input',
  templateUrl: './choose-quantity-input.component.html',
  styleUrls: ['./choose-quantity-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // tutti i value accessors degli input sono registrati con questo token
      multi: true,
      useExisting: ChooseQuantityInputComponent,
    },
    {
      provide: NG_VALIDATORS, // 
      multi: true,
      useExisting: ChooseQuantityInputComponent,
    },
  ],
})
export class ChooseQuantityInputComponent
  implements OnInit, ControlValueAccessor,Validator
{
  quantity = 0;
  @Input() increment = 1;
  onChange = (quantity: number) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  onAdd() {
    this.markAsTouched(); // esegue il callback fn passato da angular per dire al parent che il control è touched
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity); //notifico il parent che qualcosa è cambiato
    }
  }
  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity); // notifico il parent che qualcosa è cambiato
    }
  }

  constructor() {}
  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(fn: any): void {
    //child comunica al parent che qualcosa è cambiato
    this.onChange = fn; //fn è una funzione del parent, il child la esegue per dire qualcosa al parent
  }
  registerOnTouched(fn: any): void {
    // devo dire al parent quando un elemento è da considerarsi touched
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
    return null;
  }

  // registerOnValidatorChange è un metodo che può essere implementato se ci sono valori di validazione configurabili che dipendono dall'input
}
