export function fetchCells() {
  return [
    {
      size: 3,
    },
    {
      size: 2,
    },
    {
      size: 10,
    },
    {
      size: 12,
    },
    {
      size: 5,
    },
    {
      size: 13,
    },
    {
      size: 1,
    },
    {
      size: 8,
    },
    {
      size: 9,
    },
    {
      size: 3,
    },
    {
      size: 6,
    },
  ];
}

export function mean(values: number[]) {
  return values.reduce((a, c) => a + c, 0) / values.length;
}
export function deviation(values: number[]) {
  const n = values.length;
  const avg = mean(values);
  return Math.sqrt(
    values.map((x) => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / n
  );
}
