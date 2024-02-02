const router = require('express').Router();
//const contacts = require('../contacts.json');
const path = require('path');

const myController = require('../controllers');

router.get('/contacts', myController.getAll);
router.get('/contact', myController.getOne);

// This works, html page shows contacts from json file.
// router.get('/contacts', (req, res) => {
//     res.json(contacts);
// });

module.exports = router;