const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.name);
routes.get('/name2', myController.name2);

module.exports = routes;