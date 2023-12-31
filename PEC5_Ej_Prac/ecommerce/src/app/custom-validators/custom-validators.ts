import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NameArticleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    const inputValue = control.value as string;

    return forbiddenNames.includes(inputValue) ? { forbiddenName: true } : null;
  };
}