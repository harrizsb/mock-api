const randomNumber = require("random-number");

const generateRandomNumber = (min = 0, max = 1e10) =>
  randomNumber({
    min,
    max,
    integer: true,
  });

module.exports = generateRandomNumber;
