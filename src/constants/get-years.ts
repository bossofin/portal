export const getYears = (
  start: number = 2010,
  end: number = new Date().getFullYear()
) => {
  const nullArray = Array(end - start || 2010).fill(null);
  const years = nullArray.map((item, index) => {
    if (index === 0) {
      return start;
    }
    return start + index;
  });
  return years;
};
