import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function persianCharValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if(!value)
         return null;

        let PersianOrASCII = /^[\u0600-\u06FF\s]+$/;
        if (new RegExp(PersianOrASCII).test(value)) {
           return null;
        }

        return {
            persianchar:true
        }
    }
}

