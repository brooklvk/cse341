const router = require('express').Router();

const myController = require('../controllers');

// routes.get('/', myController.name);

router.use('/contacts', require('./contacts'))

module.exports = router;