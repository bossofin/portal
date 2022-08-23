export const periodTypes = [
  {
    name: 'Aylık',
    value: 'aylik',
  },
  {
    name: 'Üç Aylık',
    value: 'ucAylik',
  },
  {
    name: 'Altı Aylık',
    value: 'altiAylik',
  },
  {
    name: 'Yıllık',
    value: 'yillik',
  },
];

export type PeriodTypeKeys = keyof typeof periodTypes[0];
export type PeriodTypeValues = typeof periodTypes[0][PeriodTypeKeys];
