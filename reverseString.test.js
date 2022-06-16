import { reverseString } from './reverseString';

test('Reverses valid String', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('Returns empty String as is', () => {
  expect(reverseString('')).toBe('');
});

test('Returns empty String for invalid data type params', () => {
  expect(reverseString(123)).toBe('');
  expect(reverseString([1, 2, 3])).toBe('');
  expect(reverseString({ key: 'value' })).toBe('');
  expect(reverseString(null)).toBe('');
  expect(reverseString(undefined)).toBe('');
  expect(reverseString(NaN)).toBe('');
});
