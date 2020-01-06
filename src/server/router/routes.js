import express from 'express';
import mongoose from 'mongoose';
const Product = mongoose.model('products');

const router = express.Router();

router.get(`/api/product`, async (req, res) => {
  let products = await Product.find();
  return res.status(200).send(products);
});

router.post(`/api/product`, async (req, res) => {
  let product = await Product.create(req.body);
  return res.status(201).send({
    error: false,
    product
  })
});

router.put(`/api/product/:id`, async (req, res) => {
  const {id} = req.params;

  let product = await Product.findByIdAndUpdate(id, req.body);

  return res.status(202).send({
    error: false,
    product
  })

});

router.delete(`/api/product/:id`, async (req, res) => {
  const {id} = req.params;

  let product = await Product.findByIdAndDelete(id);

  return res.status(202).send({
    error: false,
    product
  })

});

export default router;
