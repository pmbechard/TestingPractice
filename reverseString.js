function reverseString(s) {
  return typeof s === 'string' ? s.split('').reverse().join('') : '';
}

export { reverseString };
