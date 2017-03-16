import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailValidator } from './directives/email-validator.directive';
import { EqualValidator } from './directives/equal-validator.directive';
import { SqlValidator } from './directives/sql-validator.directive';
import { FileUploaderDirective } from './directives/file-uploader.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SqlValidator,
    FileUploaderDirective,
    EmailValidator,
    EqualValidator
  ],
  exports: [
    SqlValidator,
    FileUploaderDirective,
    EmailValidator,
    EqualValidator
  ]
})
export class NgValidationModule {

}

