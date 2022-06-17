import { Cipher } from './caesarCipher';

test('Lowercase characters-only encoding', () => {
  expect(Cipher.encode('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  expect(Cipher.encode('i am hackerman', 2)).toBe('k co jcemgtocp');
});

test('Lowercase characters-only decoding', () => {
  expect(Cipher.decode('attack at dawn', 4)).toBe('wppwyg wp zwsj');
  expect(Cipher.decode('i am hackerman', 5)).toBe('d vh cvxfzmhvi');
});

test('Uppercase characters-only encoding', () => {
  expect(Cipher.encode('THIS IS A TEST', 3)).toBe('WKLV LV D WHVW');
  expect(Cipher.encode('DICKY THE DOG', 1)).toBe('EJDLZ UIF EPH');
});

test('Uppercase characters-only decoding', () => {
  expect(Cipher.decode('THIS IS A TEST', 2)).toBe('RFGQ GQ Y RCQR');
  expect(Cipher.decode('DICKY THE DOG', 5)).toBe('YDXFT OCZ YJB');
});

test('Mixed-case characters-only encoding', () => {
  expect(Cipher.encode('Attack At Dawn', 5)).toBe('Fyyfhp Fy Ifbs');
  expect(Cipher.encode('DiCkY tHe DoG', 1)).toBe('EjDlZ uIf EpH');
});

test('Mixed-case characters-only decoding', () => {
  expect(Cipher.decode('Attack At Dawn', 1)).toBe('Zsszbj Zs Czvm');
  expect(Cipher.decode('DiCkY tHe DoG', 7)).toBe('WbVdR mAx WhZ');
});

test('Negative shift values for encoding return String as is', () => {
  expect(Cipher.encode('attack at dawn', -7)).toBe('attack at dawn');
  expect(Cipher.encode('DiCkY tHe DoG', -4)).toBe('DiCkY tHe DoG');
});

test('Negative shift values for decoding are read as absolute values', () => {
  expect(Cipher.decode('Attack At Dawn', -1)).toBe('Zsszbj Zs Czvm');
  expect(Cipher.decode('DiCkY tHe DoG', -7)).toBe('WbVdR mAx WhZ');
});

test('Encoding strings containing numbers', () => {
  expect(Cipher.encode('123', 1)).toBe('234');
  expect(Cipher.encode('059', 5)).toBe('504');
  expect(Cipher.encode('a1b2c3', 2)).toBe('c3d4e5');
});

test('Decoding strings containing numbers', () => {
  expect(Cipher.decode('123', 1)).toBe('012');
  expect(Cipher.decode('059', 5)).toBe('504');
  expect(Cipher.decode('a1b2c3', 2)).toBe('y9z0a1');
});

test('Encoding strings with non-letters and non-numbers', () => {
  expect(Cipher.encode('hey!', 1)).toBe('ifz!');
  expect(Cipher.encode('~!@#$%^&*()_+', 5)).toBe('~!@#$%^&*()_+');
});

test('Decoding strings with non-letters and non-numbers', () => {
  expect(Cipher.decode('hey!', 1)).toBe('gdx!');
  expect(Cipher.decode('~!@#$%^&*()_+', 5)).toBe('~!@#$%^&*()_+');
});

test('Invalid types for encoding values return empty String', () => {
  expect(Cipher.encode(123, 1)).toBe('');
  expect(Cipher.decode([1, 2, 3], 2)).toBe('');
  expect(Cipher.encode({ key: 'value' }, 3)).toBe('');
  expect(Cipher.decode(undefined, 4)).toBe('');
  expect(Cipher.encode(NaN, 5)).toBe('');
  expect(Cipher.decode(null, 6)).toBe('');
});

test('Invalid types for shift values return empty String', () => {
  expect(Cipher.decode('valid', 'invalid')).toBe('');
  expect(Cipher.encode('valid', [1, 2, 3])).toBe('');
  expect(Cipher.decode('valid', { key: 'value' })).toBe('');
  expect(Cipher.encode('valid', undefined)).toBe('');
  expect(Cipher.decode('valid', NaN)).toBe('');
  expect(Cipher.encode('valid', null)).toBe('');
});
