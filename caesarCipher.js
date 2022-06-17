export class Cipher {
  static encode(text, shift) {
    if (!this.#validateText(text) || !this.#validateShift(shift)) return '';
    if (shift < 1) return text;
    let result = [];
    for (let i = 0; i < text.length; i++) {
      let asciiVal = text.charCodeAt(i);
      if (asciiVal >= 65 && asciiVal <= 90) {
        let newVal = asciiVal + shift;
        while (newVal > 90) {
          newVal -= 26;
        }
        result.push(String.fromCharCode(newVal));
      } else if (asciiVal >= 97 && asciiVal <= 122) {
        let newVal = asciiVal + shift;
        while (newVal > 122) {
          newVal -= 26;
        }
        result.push(String.fromCharCode(newVal));
      } else if (asciiVal >= 48 && asciiVal <= 57) {
        let newVal = asciiVal + shift;
        while (newVal > 57) {
          newVal -= 10;
        }
        result.push(String.fromCharCode(newVal));
      } else {
        result.push(String.fromCharCode(asciiVal));
      }
    }
    return result.join('');
  }
  static decode(text, shift) {
    if (!this.#validateText(text) || !this.#validateShift(shift)) return '';
  }
  static #validateText(text) {
    return typeof text === 'string';
  }
  static #validateShift(shift) {
    return typeof shift === 'number' && !isNaN(shift);
  }
}
