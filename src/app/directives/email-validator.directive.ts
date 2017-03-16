import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

function validateEmailFactory(): Function {
    return (c: FormControl) => {
      /* tslint:disable */
      let EMAIL_REGEXP =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      /* tslint:enable */
      return EMAIL_REGEXP.test(c.value) ? null : {
                validateEmail: {
                    valid: false
                }
            };
    };
}

@Directive({
    selector: '[validateEmail],[validateEmail][ngModel],[validateEmail][formControl]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true}
    ]
})
export class EmailValidator implements Validator {

    validator: Function;

    constructor() {
        this.validator = validateEmailFactory();
    }

    validate(c: FormControl): {[key: string]: any} {
        return this.validator(c);
    }
}
