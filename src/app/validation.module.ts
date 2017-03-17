import { NgModule } from '@angular/core';

import { EmailValidator } from './directives/email-validator.directive';
import { EqualValidator } from './directives/equal-validator.directive';
import { SqlValidator } from './directives/sql-validator.directive';
import { FileTypeValidator } from './directives/file-type-validator.directive';

@NgModule({
  imports: [ ],
  declarations: [
    SqlValidator,
    FileTypeValidator,
    EmailValidator,
    EqualValidator
  ],
  exports: [
    SqlValidator,
    FileTypeValidator,
    EmailValidator,
    EqualValidator
  ]
})
export class NgValidationModule { }

