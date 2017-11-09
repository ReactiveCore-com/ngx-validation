import { NgModule } from '@angular/core';

import { EmailValidator } from './directives/email-validator.directive';
import { EqualValidator } from './directives/equal-validator.directive';
import { FileTypeValidator } from './directives/file-type-validator.directive';

@NgModule({
  imports: [],
  declarations: [
    FileTypeValidator,
    EmailValidator,
    EqualValidator
  ],
  exports: [
    FileTypeValidator,
    EmailValidator,
    EqualValidator
  ]
})
export class NgValidationModule { }

