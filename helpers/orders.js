const random = require("random-name");
const generateRandomNumber = require("./generateRandomNumber");
const randomWords = require("random-words");
const { buyer_information: buyer, shop_id } = require("./contstant");

const orders = (products = []) => {
  return [
    {
      order_id: generateRandomNumber(),
      invoice_number: `${generateRandomNumber(0, 2000)}/${randomWords({
        exactly: 2,
        join: "/",
      })}`,
      products,
      buyer,
      shop_id,
      payment_id: generateRandomNumber(),
      recipient: {
        ...buyer,
        address: random(),
      },
    },
  ];
};

module.exports = orders;
