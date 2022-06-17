export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return {};
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) return {};

  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });

  const result = {
    average: sum / arr.length,
    length: arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
  };

  return result;
}
