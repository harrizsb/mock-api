const random = require("random-name");
const randomWords = require("random-words");
const generateRandomNumber = require("./generateRandomNumber");
const { shop_id, shop_name, shop_status } = require("./contstant");

const generateProduct = () => {
  return {
    product_id: generateRandomNumber(),
    name: random(),
    shop_id: shop_id,
    shop_name: shop_name,
    category_id: generateRandomNumber(),
    desc: randomWords({ exactly: 10, join: " " }),
    stock: generateRandomNumber(),
    price: generateRandomNumber(),
    status: shop_status,
  };
};

module.exports = generateProduct;
