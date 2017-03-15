import { Directive, forwardRef, Input,
  HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[fileUpload][formControlName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => FileUploaderDirective), multi: true}
  ]
})
export class FileUploaderDirective implements Validator {
  @Input() fileType: string = 'owl, xml';
  @Output() fileAdded = new EventEmitter();
  files: File[];
  control: AbstractControl;

  constructor(private element: ElementRef) {
  }

  validate(c: AbstractControl): {[key: string]: any} {
    this.control = c;
    if (this.files && this.files.length) {
      if (this.fileType.indexOf(this.files[0].name.split('.').pop()) > -1) {
        let reader = new FileReader();
        reader.readAsText(this.files[0]);
        reader.onload = () => {
          this.fileAdded.emit({
            file: reader.result,
            name: this.files[0].name
          });
        };
        return null;
      } else {
        this.element.nativeElement.value = '';
        this.fileAdded.emit(null);
        return {
          file: ` Files in one of the extensions of ${this.fileType} are accepted!`
        };
      }
    }
    return {
      file: 'please upload a valid file'
    };
  }

  @HostListener('change', ['$event'])
  public onChange(event: any): void {
    this.files = this.element.nativeElement.files;
    this.control.markAsDirty();
    this.control.updateValueAndValidity();
  }

}
