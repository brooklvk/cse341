const router = require('express').Router();
//const contacts = require('../contacts.json');
const path = require('path');

const myController = require('../controllers');

router.get('/contacts', myController.getAll);
router.get('/contacts/:id', myController.getOne);

router.post('/contacts', myController.createNew);
router.put('/contacts/:id', myController.updateContact);
router.delete('/contacts/:id', myController.deleteContact);

// This works, html page shows contacts from json file.
// router.get('/contacts', (req, res) => {
//     res.json(contacts);
// });

module.exports = router;