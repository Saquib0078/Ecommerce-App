const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const productController = require('../controller/productController')
const cartController = require('../controller/cartController')
const orderController = require('../controller/orderController')
const auth = require('../auth/auth')
// const qr = require('qrcode')


//**********************user*********************/
router.post('/register', userController.postUser)
router.post('/login', userController.loginUser)
router.get('/user/:userId/profile', auth.Authentication, userController.getUserProfile)
router.put('/user/:userId/profile', auth.Authentication, auth.Authorization, userController.updateUser)

//************************Product*************//
router.post('/products', productController.product)
router.get('/products', productController.getProductByFilters)
router.get('/products/:productId', productController.getProductsById)
router.put('/products/:productId', productController.updateProductsById)
router.delete('/products/:productId', productController.deleteProductById)

//*********************cart******************/
router.post('/users/:userId/cart', auth.Authentication,auth.Authorization, cartController.addToCart)
router.put('/users/:userId/cart', auth.Authentication, auth.Authorization, cartController.removeProduct)
router.get('/users/:userId/cart', auth.Authentication, auth.Authorization, cartController.getCartDetails)
router.delete('/users/:userId/cart', auth.Authentication, auth.Authorization, cartController.deleteCart)

//*********************Order*****************/
router.post('/users/:userId/orders', auth.Authentication,auth.Authorization, orderController.placeOrder)
router.put('/users/:userId/orders', auth.Authentication, auth.Authorization, orderController.updateOrder)

// router.get('/qr', (req, res) => {
//     const { url } = req.query
//     qr.toFile(`qr.png`, url, {
//       color: {
//         dark: '#000000',  // Black dots
//         light: '#ffffff' // White background
//       }
//     }, (err) => {
//       if (err) throw err
//       res.download(`qr.png`)
//     })
//   })




module.exports = router



