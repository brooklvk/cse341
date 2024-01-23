const router = require('express').Router();
//const contacts = require('../contacts.json');
const path = require('path');

const myController = require('../controllers');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/', myController.getData);


// This works, html page shows contacts from json file.
// router.get('/contacts', (req, res) => {
//     res.json(contacts);
// });

module.exports = router;