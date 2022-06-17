import { Cipher } from './caesarCipher';

test('Lowercase characters-only encoding', () => {
  expect(Cipher.encode('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  expect(Cipher.encode('i am hackerman', 2)).toBe('k co jcemgtocp');
});

test('Uppercase characters-only encoding', () => {
  expect(Cipher.encode('THIS IS A TEST', 3)).toBe('WKLV LV D WHVW');
  expect(Cipher.encode('DICKY THE DOG', 1)).toBe('EJDLZ UIF EPH');
});

test('Mixed-case characters-only encoding', () => {
  expect(Cipher.encode('Attack At Dawn', 5)).toBe('Fyyfhp Fy Ifbs');
  expect(Cipher.encode('DiCkY tHe DoG', 1)).toBe('EjDlZ uIf EpH');
});

test('Negative shift values for encoding return String as is', () => {
  expect(Cipher.encode('attack at dawn', -7)).toBe('attack at dawn');
  expect(Cipher.encode('DiCkY tHe DoG', -4)).toBe('DiCkY tHe DoG');
});

test('Encoding strings including numbers', () => {
  expect(Cipher.encode('123', 1)).toBe('234');
  expect(Cipher.encode('059', 5)).toBe('504');
  expect(Cipher.encode('a1b2c3', 2)).toBe('c3d4e5');
});

test('Encoding strings with non-letters and non-numbers', () => {
  expect(Cipher.encode('hey!', 1)).toBe('ifz!');
  expect(Cipher.encode('~!@#$%^&*()_+', 5)).toBe('~!@#$%^&*()_+');
});

test('Invalid types for encoding values return empty String', () => {
  expect(Cipher.encode(123, 1)).toBe('');
  expect(Cipher.encode([1, 2, 3], 2)).toBe('');
  expect(Cipher.encode({ key: 'value' }, 3)).toBe('');
  expect(Cipher.encode(undefined, 4)).toBe('');
  expect(Cipher.encode(NaN, 5)).toBe('');
  expect(Cipher.encode(null, 6)).toBe('');
});

test('Invalid types for shift values return empty String', () => {
  expect(Cipher.encode('valid', 'invalid')).toBe('');
  expect(Cipher.encode('valid', [1, 2, 3])).toBe('');
  expect(Cipher.encode('valid', { key: 'value' })).toBe('');
  expect(Cipher.encode('valid', undefined)).toBe('');
  expect(Cipher.encode('valid', NaN)).toBe('');
  expect(Cipher.encode('valid', null)).toBe('');
});

// TODO: Add testing for decoding function
