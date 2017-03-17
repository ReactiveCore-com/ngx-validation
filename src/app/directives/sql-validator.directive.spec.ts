import { FormControl } from '@angular/forms';
import { SqlValidator } from './sql-validator.directive';
describe('SqlValidatorDirective', () => {
  const directive = new SqlValidator();
  const control = new FormControl();
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  it('should detect a false query', () => {
    control.setValue('select *');
    expect(directive.validate(control)['sql']).toBeTruthy();
  });
  it('should detect a true query', () => {
    control.setValue('select * from a');
    expect(directive.validate(control)).toBeNull();
  });
});
