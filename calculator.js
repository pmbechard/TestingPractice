const calculator = {
  checkValidity: function (a, b) {
    return (
      typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)
    );
  },
  add: function (a, b) {
    return this.checkValidity(a, b) ? a + b : 0;
  },
  subtract: function (a, b) {
    return this.checkValidity(a, b) ? a - b : 0;
  },
  multiply: function (a, b) {
    return this.checkValidity(a, b) ? a * b : 0;
  },
  divide: function (a, b) {
    if (b === 0) return 0;
    return this.checkValidity(a, b) ? a / b : 0;
  },
};

export { calculator };
