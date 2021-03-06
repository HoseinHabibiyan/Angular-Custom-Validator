import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function postalCodeValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const code = control.value;

        if(code?.length !== 10)
            return {
                postalcode:true
            };

        if(new RegExp("^([0-9])\\1*$").test(code)) // check if all digits is same
            return {
                postalcode:true
            };

        if(new RegExp("[02]").test(code)) // Postal Code Can Not Contains 0 and 2
            return {
                postalcode:true
            };

        if(new RegExp("^([0-9])\\1*$").test(code.substring(0,3))) // 4 elementry Digit Can not be Same
            return {
                postalcode:true
            };

        if(code.split('')[4] == "5")
            return {
                postalcode:true
            };

        return null;
    }
}