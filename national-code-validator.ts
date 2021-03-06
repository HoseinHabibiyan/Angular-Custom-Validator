
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function nationalCodeValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

    const code = control.value;

     if(!code)
        return null;


    if(code.length <10) return {
        nationalcode:true
    }

    
    if(new RegExp("^([0-9])\\1*$").test(code)) // check if all digits is same
    return {
        nationalcode:true
    };

    if (!/^\d{10}$/.test(code))
    return {
        nationalcode:true
    }

        const check = +code[9];
        const sum =Array.from(new Array(9), (_, i) => +code[i] * (10 - i)).reduce((x, y) => x + y) % 11
        return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11) ? null : {
            nationalcode:true
        };
    
    }
}





