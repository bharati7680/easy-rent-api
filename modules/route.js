var express = require('express');
var router = express.Router();


const productRouter = require('./products/product.route')
const authRouter = require('./auth/auth.route')
const authMiddleWare = require('../middlewares/auth.middleware')


router.use('/product', productRouter)
router.use('/auth', authRouter)

module.exports = router;