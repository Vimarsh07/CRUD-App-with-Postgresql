const router = require('express-promise-router')();
const productController = require('../controllers/product.controllers');


router.post('/products', productController.createProduct);
router.get('/products', productController.getProduct);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);
module.exports = router;