export const getPlural = (count: number, one: string, few: string, many: string) => {
  if (count === 1) return one;
  if (count % 10 === 1 && count % 100 !== 11) return one;
  if (count % 10 === 2 && count % 100 !== 12) return few;
  if (count % 10 === 3 && count % 100 !== 13) return few;
  return many;
};
