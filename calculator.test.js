import { calculator } from './calculator';

test('Valid operations with integers', () => {
  expect(calculator.add(6, 2)).toEqual(8);
  expect(calculator.subtract(6, 2)).toEqual(4);
  expect(calculator.multiply(6, 2)).toEqual(12);
  expect(calculator.divide(6, 2)).toEqual(3);
});

test('Valid operations with floating point numbers', () => {
  expect(calculator.add(6.5, 2.25)).toEqual(8.75);
  expect(calculator.subtract(6.5, 2.25)).toEqual(4.25);
  expect(calculator.multiply(6.5, 0.5)).toEqual(3.25);
  expect(calculator.divide(12.5, 2.5)).toEqual(5);
});

test('Invalid inputs', () => {
  expect(calculator.add(6.5, 'abc')).toEqual(0);
  expect(calculator.subtract({ key: 'value' }, 2)).toEqual(0);
  expect(calculator.multiply(null, 2)).toEqual(0);
  expect(calculator.divide(2, undefined)).toEqual(0);
  expect(calculator.divide(NaN, 2)).toEqual(0);
});

test('Handles zero division', () => {
  expect(calculator.divide(5, 0)).toBe(0);
});
