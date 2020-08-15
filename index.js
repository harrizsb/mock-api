const express = require("express");
const app = express();
const port = 8080;
const products = require("./helpers/products");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => res.send({ data: products }));

app.get("/orders", (req, res) => {
  const orders = require("./helpers/orders");

  res.send({ data: orders(products) });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
