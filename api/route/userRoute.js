const express = require('express');
const route = express.Router();
const userController = require('../controller/userController');


const getAllUser = ((req, res, next) => {

})

route.get('/', userController.getAllUser);

route.post('/signup', userController.signupUser);

route.post('/signin', userController.signinUser)


module.exports = route;