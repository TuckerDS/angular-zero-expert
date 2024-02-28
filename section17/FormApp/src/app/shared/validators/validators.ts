import { FormControl, ValidationErrors } from "@angular/forms"

const firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

const cantBeStrider = (control: FormControl): ValidationErrors | null => {

  const value: string = control.value.trim().toLowerCase();

  return (value === 'strider') ? { noStrider: true } : null;
}

export const CustomValidators = {
  firstNameAndLastNamePattern,
  emailPattern,
  cantBeStrider
}
