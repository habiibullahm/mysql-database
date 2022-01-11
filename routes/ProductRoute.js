 const express = require('express')
const router = express.Router()
const ProductController= require('../controller/ProductController')
const { authenticate, authorize} = require("../middlewares/auth");
//authenticate dipakai ketika crud
//authorize dipakai ketika login

router.post('/', authenticate, ProductController.postProduct);
router.get('/',ProductController.getProduct);
router.get('/:id',ProductController.getOneProduct);
router.put('/:id',authenticate, ProductController.putProduct);
router.delete('/:id',authenticate, ProductController.deleteProduct);



module.exports = router;