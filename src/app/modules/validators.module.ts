import { NgModule } from "@angular/core";
import { VALIDATION_MESSAGES } from "../validation/validation-message";
//  troppo avanzato per ora :/
@NgModule({
    providers:[
        {
            provide:VALIDATION_MESSAGES,
            useValue:{
                required:()=>'This field is required',
                email:()=>'This field must be a valid email',
                password:()=>'Choose a valid password',
                passwordConfirm:(details:any)=>`${details}`

            }
        }
    ]
})
export class ValidatorsModule{}