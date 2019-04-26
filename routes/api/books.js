const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Matches with '/api/books'
router.route('/saved')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with '/api/bookshelf/:id'
router.route('/saved/:id')
  .delete(booksController.delete);

module.exports = router;
