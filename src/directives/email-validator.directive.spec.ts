import { EmailValidator } from './email-validator.directive';
import { FormControl } from '@angular/forms';
describe('EmaailValidatorDirective', () => {
  const directive = new EmailValidator();
  const control = new FormControl();
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  it('should detect a false email', () => {
    control.setValue('test');
    expect(directive.validate(control)['validateEmail']['valid']).toBe(false);
  });
  it('should detect a false email', () => {
    control.setValue('test@mail.com');
    expect(directive.validate(control)).toBeNull();
  });
});
