import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
// import { CustomValidators } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  // public myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.pattern(CustomValidators.firstNameAndLastNamePattern)]],
  //   email: ['', [Validators.required, Validators.pattern(CustomValidators.emailPattern)]],
  //   username: ['', [Validators.required, CustomValidators.cantBeStrider]],
  //   password: ['', [Validators.required]],
  //   password2: ['', [Validators.required, Validators.minLength(6)]],
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) { }

  isValidField(field: string): boolean {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
