/* tslint:disable:no-unused-variable */
import { FileTypeValidator } from './file-type-validator.directive';
import { ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
describe('FileUploaderDirective', () => {
  const fileType = 'owl, xml';
  const file = new File([], 'test.xml', {type: 'text/plain'});
  const input = document.createElement('input');
  input.type = 'file';
  const el = new ElementRef(input);
  const control = new FormControl;
  const directive = new FileTypeValidator(el);
  directive.control = control;
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  it('should detect a missing file', () => {
    directive.onChange(new Event('test'));
    expect(directive.validate(control)['file'])
      .toBe('please upload a valid file', 'should update a file');
  });
  /*it('should detect a file with wrong extension', () => {
   el.nativeElement.files[0] = file;
   directive.onChange(new Event('test'));
   expect(directive.validate(control)['file'])
   .toBe(` Files in one of the extensions of ${fileType} are accepted!`);
   });*/
});
