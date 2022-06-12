const express = require('express');
const ProductsSerivice = require('../services/products.service');
const validatorHandle = require('../middleware/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema');

const router = express.Router();

const service = new ProductsSerivice();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', validatorHandle(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await service.findOne(id);

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', validatorHandle(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;

    const newProduct = await service.create(body);

    res.status(201).json(newProduct);
  }
);

router.patch('/:id', validatorHandle(getProductSchema, 'params'),
  validatorHandle(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const product = await service.update(id, body);

      res.json(product);
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const rta = await service.delete(id);

  res.json(rta)
});


module.exports = router;
