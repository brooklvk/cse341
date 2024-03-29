const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
};

//get 1 contact where id matches id in query 
const getOne = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); 
  });
};

//create new contact 
const createNew = async (req, res, next) => {
  const contact = {
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      favoriteColor : req.body.favoriteColor,
      birthday : req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Error: problem with new contact.');
  };
}

//update 1 contact where id matches id in query 
const updateContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favoriteColor : req.body.favoriteColor,
    birthday : req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: userId }, contact);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error: problem with updating contact.');
  };
}

//delete 1 contact where id matches id in query 
const deleteContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId }, true);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Error: contact was not deleted.');
  };
};

module.exports = { getAll, getOne, createNew, updateContact, deleteContact };