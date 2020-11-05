import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';



export function isValidNickname(): ValidatorFn {
  return (nickname: AbstractControl): ValidationErrors | null => {
    const entry = nickname.value;
    const checkNickname = !entry || entry.indexOf('a') === 0 ? false : true;
    const checknickname$ = of(checkNickname).pipe(take(1));
    return checkNickname ? { nNameInValid: true } : null;

  };
};

@Directive({
  selector: '[appValidateNickname]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ValidateNicknameDirective, multi: true }]

})
export class ValidateNicknameDirective implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(isValidNickname());;
  }

}
