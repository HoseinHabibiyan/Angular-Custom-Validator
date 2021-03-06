import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function IPAddressValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const ip = control.value;

        if(!ip)
           return null;
    
        if (!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {  
            return {
                ipaddress:true
            };
        }      

        return null;
    }
}