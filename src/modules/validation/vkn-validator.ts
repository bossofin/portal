import { AbstractControl, ValidationErrors } from '@angular/forms';

export const vknValidator = (control: AbstractControl): ValidationErrors => {
  const value = control.value;
  if (String(value).length !== 10) {
    return {
      vkn: true,
    };
  }
  return null;
};
