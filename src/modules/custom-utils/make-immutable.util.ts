export const makeImmutable = <T>(obj: {} | []): T =>
  obj && JSON.parse(JSON.stringify(obj));
