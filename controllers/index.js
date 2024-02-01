const mongodb = require('../database/connection');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
};

//new get route, get 1 contact where id matches id in query 

module.exports = { getData };