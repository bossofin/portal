export const addCharToStart = (
  value: string | number,
  length: number = 2,
  char: string = '0'
) => {
  return String(value).padStart(length, char);
};
