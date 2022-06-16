import { capitalize } from './capitalize';

test('Capitalizes first letter of valid string', () => {
  expect(capitalize('john')).toBe('John');
});

test('Handles empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Handles non-letter characters as first letters', () => {
  expect(capitalize('123')).toBe('123');
});

test('Handles non-String data types by returning empty String', () => {
  expect(capitalize(123)).toBe('');
  expect(capitalize([1, 2, 3])).toBe('');
  expect(capitalize({ key: 'value' })).toBe('');
});

test('Handles null, undefined, NaN types by returning empty String', () => {
  expect(capitalize(null)).toBe('');
  expect(capitalize(undefined)).toBe('');
  expect(capitalize(NaN)).toBe('');
});
