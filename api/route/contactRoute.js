const express = require('express');
const route = express.Router();
const contactController = require('../controller/contactController');
const authenticate = require('../middelware/routeProtector');



route.get('/', authenticate, contactController.getAllContacts) 

route.post('/', authenticate, contactController.createNewContact) //create new contact

route.get('/:id', authenticate, contactController.getSingleContact) //get single contact

route.patch('/:id', authenticate, contactController.updateContactById) //update contact

route.delete('/:id', authenticate, contactController.deleteContactById) //delete contact



module.exports = route;