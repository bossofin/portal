import { passwordRegEx } from '@constants/password-regex';

export const validationMessages: { [key: string]: string } = {
  required: 'Zorunlu Alan.',
  email: 'Geçerli bir e-posta adresi yazınız.',
  confirmPassword: 'Şifreler aynı değil.',
};
export const validationMessagesFunctions = {
  minLength: (length: number) => `En az ${length} karakter olabilir.`,
  mask: (format: string) => `Lütfen ${format} şeklinde giriş yapın.`,
  pattern: (pattern: string) => {
    switch (String(pattern)) {
      case String(passwordRegEx):
        return 'Şifreniz en az bir küçük harf, en az bir büyük harf ve en az bir rakam içermelidir.';
      default:
        return null;
    }
  },
};
