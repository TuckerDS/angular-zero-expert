import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
  // public myForm = new FormGroup({
  //   favoriteGames: new FormArray([])
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  })

  public newFavorite: FormControl = new FormControl('', [Validators.required])

  constructor(private fb: FormBuilder) { }

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean {
    return !!this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(formArray: FormArray, index: number): boolean {
    return !!formArray.controls[index].errors
      && formArray.controls[index].touched;
  }

  getFieldError(field: string): string {
    if (!this.myForm.controls[field] && !this.myForm.controls[field].errors) {
      return ''
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return '';
  }

  onAddFavorite(): void {
    if (this.newFavorite.invalid) {
      return;
    }

    const newGame = this.newFavorite.value;
    // this.favoriteGames.push(new FormControl(newGame, [Validators.required]))
    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required])
    )

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
    this.myForm.controls['favoriteGames'] = this.fb.array([]);
  }
}
