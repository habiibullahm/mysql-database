const express = require('express')
const router = express.Router()

const SellerController = require('../controller/SellerController');

router.post('/register', SellerController.postRegister);
router.post('/login', SellerController.postLogin );
module.exports = router;