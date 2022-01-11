const express = require('express')
const router = express.Router()
const ProductRoute = require('./ProductRoute')
const SellerRoute = require('./SellerRoute')


router.use('/product', ProductRoute);
router.use('/seller', SellerRoute)

module.exports = router;