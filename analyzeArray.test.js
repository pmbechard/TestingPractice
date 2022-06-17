import { analyzeArray } from './analyzeArray';

test('Returns empty object if invalid param', () => {
  expect(analyzeArray(213)).toEqual({});
  expect(analyzeArray('213')).toEqual({});
  expect(analyzeArray({ key: 'value' })).toEqual({});
  expect(analyzeArray(undefined)).toEqual({});
  expect(analyzeArray(null)).toEqual({});
  expect(analyzeArray(NaN)).toEqual({});
});

test('Returns empty object if invalid item in array', () => {
  expect(analyzeArray([1, 2, '3'])).toEqual({});
  expect(analyzeArray([null, 2, 3])).toEqual({});
  expect(analyzeArray([{ key: 'value' }, 2, 3])).toEqual({});
  expect(analyzeArray(undefined, NaN, null)).toEqual({});
});

test('Returns empty object if param is empty array', () => {
  expect(analyzeArray([])).toEqual({});
});

test('Checks results of valid values', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8,
  });
});
