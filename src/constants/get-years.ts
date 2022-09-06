export const getYears = (
  start: number = 2010,
  end: number = new Date().getFullYear()
) => {
  const nullArray = Array(end - start || 1).fill(null);
  const years = nullArray.map((item, index) => {
    if (index === 0) {
      return start;
    }
    return start + index + 1;
  });
  return years.reverse();
};
