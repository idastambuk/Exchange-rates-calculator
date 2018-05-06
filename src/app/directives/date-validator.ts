import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';
@Directive({
   selector: '[validDate]',
   // We add our directive to the list of existing validators
   providers: [
     { provide: NG_VALIDATORS, useExisting: DateValidator, multi: true }
   ]
})

export class DateValidator implements Validator {
    // This method is the one required by the Validator interface
    validate(c: FormControl): ValidationErrors | null {
    // Here we call our static validator function 
    return DateValidator.validateDate(c);
    }

    static validateDate(control: FormControl): ValidationErrors {
        if(control.value) {
            //Convert today's date to string for comparison
            var date = new Date();
            var mm = (date.getMonth() + 1).toString();
            var dd = date.getDate().toString();
            var date_now = [date.getFullYear(), mm.length === 2 ? '' : '0', mm, dd.length === 2 ? '' : '0', dd].join('');   
            
            // Convert control value to string for comparison
            var control_value = control.value.replace(/-/g,"");
            
            if (! (control_value <= date_now)) {
                // Return error if date selected is in the future 
                return {message : 'You have selected a date in the future'};
            }
            // If no error, return null  
            return null;
        } 
        return {message: "Please select a date"}; 
    } 
}