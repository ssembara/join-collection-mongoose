module.exports = app => {
    const productController = require('../controllers/productController')
  
    app.get('/api/products', productController.index)
    app.post('/api/products/store', productController.store)
    app.get('/api/products/:idProduct', productController.show)
    
  }