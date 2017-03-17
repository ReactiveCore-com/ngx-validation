import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
let sql = require('sql-parser');
@Directive({
  selector: '[sqlValidate],[sqlValidate][formControlName],' +
  '[sqlValidate][formControl],[sqlValidate][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => SqlValidator), multi: true}
  ]
})
export class SqlValidator implements Validator {
  constructor() {
  }

  validate(c: AbstractControl): {[key: string]: any} {
    let v = c.value;
    let result = {sql: 'sql not valid'};
    try {
      if (sql.parse(v)) {
        return null;
      }
    } catch (e) {
      result.sql = e.message;
    }
    return result;
  }
}
