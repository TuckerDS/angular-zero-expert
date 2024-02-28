
import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    return (value === 'strider') ? { noStrider: true } : null;
  }

  public isValidField(form: FormGroup, field: string): boolean {
    return !!form.controls[field].errors
      && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      const error = { notEqual: true }

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors(error)
        return error
      }

      // Clean input error, if necessary check others errors
      formGroup.get(field2)?.setErrors(null)

      return null;
    }
  }

}
