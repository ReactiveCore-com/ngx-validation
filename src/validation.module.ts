import { NgModule } from '@angular/core';
import { EmailValidator, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidator } from './directives/equal-validator.directive';
import { SqlValidator } from './directives/sql-validator.directive';
import { FileUploaderDirective } from './directives/file-uploader.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/typings/animations';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SqlValidator,
    FileUploaderDirective,
    EmailValidator,
    EqualValidator,
  ],
  exports: []
})
export class NgxValidation {

}

