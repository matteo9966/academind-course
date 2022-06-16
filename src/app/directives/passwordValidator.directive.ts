import { Directive, Input } from '@angular/core';

import {
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
} from '@angular/forms';

@Directive({
    selector:'[passwordValid][ngModel]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:PasswordValidatorDirective,
            multi:true,
        }
    ],
    
})
export class PasswordValidatorDirective implements Validator{
    @Input('passwordValid') passwordValid!:string;
    validate(control: AbstractControl): ValidationErrors | null {
         if(control.value!==this.passwordValid){
            return {
                error:"the passwords must match"
            }
         }
         return null
    }

    /* 
      registerOnValidatorChange?(fn: () => void): void { //registerOnValidatorChange è una funzione
        che mi restituisce fn,
        asscocio un riferimento a fn e chiamo fn ogni volta che voglio che il validator sia eseguito
        
        una soluzione è : validator quando cambio il valore di un input
    
    this._onChange = fn;
  }
    */

}