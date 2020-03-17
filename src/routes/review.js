module.exports = app => {
    const reviewController = require('../controllers/reviewController')
  
    app.get('/api/reviews', reviewController.index)
    app.post('/api/reviews/:idProduct/store', reviewController.store)
    app.delete('/api/reviews/:idProduct/destroy/:idReview', reviewController.destroy)
    
  }