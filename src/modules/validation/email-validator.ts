import { AbstractControl, ValidationErrors } from '@angular/forms';
import { emailRegEx } from '@constants/email-reg-ex';

export const emailValidator = (control: AbstractControl): ValidationErrors => {
  const value = control.value;
  const matchValue = String(value).match(emailRegEx);
  if (!matchValue) {
    return {
      email: true,
    };
  }
  return null;
};
