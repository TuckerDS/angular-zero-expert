
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  constructor() { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(subscriber => {
      console.log(email);
      if (email === 'fernando@google.com') {
        subscriber.next({
          emailTaken: {
            message: 'El email ya existe'
          }
        })
        subscriber.complete();
        // return;
      }

      subscriber.next(null);
      subscriber.complete()
    }).pipe(delay(2000));

    return httpCallObservable
  }



  // validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   throw new Error('Method not implemented.');
  // }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
