import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function isDigitsValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if(!value)
           return null;

         if(RegExp("^[\p{N}]+$").test(value)){
              return {
                 isdigits:true
            }
         }

         return null;
    }
}

