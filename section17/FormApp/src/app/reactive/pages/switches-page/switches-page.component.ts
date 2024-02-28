import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {

  public person = {
    gender: 'M',
    wantsNotifications: false
  }

  public myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantsNotifications: [true, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]]
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    this.myForm.reset(this.person);
  }

  isValidField(field: string): boolean {
    return !!this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    const { gender, wantsNotifications } = this.myForm.value;
    this.person = { gender, wantsNotifications };
  }
}
