const productsCtrl = {};

const Product = require("../models/Product");

productsCtrl.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

productsCtrl.createProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({
    name,
    price,
  });
  await newProduct.save();
  res.json("New Product added");
};

productsCtrl.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

productsCtrl.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json("Product Deleted");
};

productsCtrl.updateProduct = async (req, res) => {
  const { name, price } = req.body;
  await Product.findByIdAndUpdate(req.params.id, {
    name,
    price,
  });
  res.json("Product Updated");
};

module.exports = productsCtrl;
