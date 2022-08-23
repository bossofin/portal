import { AbstractControl } from '@angular/forms';
import {
  validationMessages,
  validationMessagesFunctions,
} from './validation-messages';

export const getValidationMessage = (control: AbstractControl) => {
  const errors = control.errors;
  const errorsKeys = errors && Object.keys(errors);
  if (errorsKeys) {
    switch (errorsKeys[0]) {
      case 'minlength':
        return validationMessagesFunctions.minLength(
          errors['minlength'].requiredLength
        );
      case 'mask':
        return validationMessagesFunctions.mask(errors['mask'].requiredMask);
      case 'pattern':
        return validationMessagesFunctions.pattern(
          errors['pattern'].requiredPattern
        );
      default:
        return validationMessages[errorsKeys[0]];
    }
  }
  return null;
};
