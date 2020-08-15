const generateProduct = require("./product");
const generateRandomNumber = require("./generateRandomNumber");

const products = Array.from(
  Array(generateRandomNumber((min = 0), (max = 100))),
  () => {
    return generateProduct();
  }
);

module.exports = products;
