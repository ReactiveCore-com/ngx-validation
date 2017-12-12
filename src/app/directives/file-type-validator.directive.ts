import {
  Directive,
  forwardRef,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

@Directive({
  selector: '[fileTypeValidation][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileTypeValidator),
      multi: true
    }
  ]
})

export class FileTypeValidator implements Validator {
  @Input() fileType: [string] = ['owl', 'xml'];
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
          file: `Only file extensions with ${this.fileType} are allowed`
        };
      }
    }
    return null;
  }

  @HostListener('change', ['$event'])
  public onChange(event: any): void {
    this.files = this.element.nativeElement.files;
    this.control.markAsDirty();
    this.control.updateValueAndValidity();
  }

}
