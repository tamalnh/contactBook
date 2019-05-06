const gravatar = require('gravatar');
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config')

const getAllUser = ((req, res, next) => {
    User.find()
        .then(users => {
            if(users){
                res.status(200).json({
                    message: `${users.length} available`,
                    users: users
                })
            }else{
                res.status(404).json({
                    message: 'no user'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: 'error occured'
            })            
        })
})


const signupUser = ((req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                res.json({
                    message: 'email already registered!'
                })
            }else{
                 bcrypt.hash(req.body.password, 10, (err, hash) => {
                     if(err){
                         console.log(err);
                         
                         res.status(500).json({
                             error: 'error occred'
                         })
                     }else{
                        const userAvatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: '404'})
                         let newUser = new User({
                             name: req.body.name,
                             avatar: userAvatar,
                             email: req.body.email,
                             password: hash
                         })

                         newUser.save()
                                .then(user => {
                                    res.status(200).json({
                                        message: 'signup successfull',
                                        user: user
                                    })
                                })
                     }
                 })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: 'error occured'
            })            
        })
})


const signinUser = ((req, res, next)=> {
    User.findOne({email: req.body.email})
        .then(result => {
            if(result){
                bcrypt.compare(req.body.password, result.password, (err, user) => {
                    if(err){
                        console.log(err);
                        res.status(500).json({
                            errror: 'error occurred',

                        })                        
                    }else{
                        jwt.sign({
                            _id: result._id, 
                            avatar: result.avatar,
                            name: result.name,
                            email: result.email,

                        }, config.SECRET_KEY, {expiresIn: '1h'}, (err, token) => {
                            if(err) {
                                console.log(err);
                                res.status(500).json({
                                    error: 'error occured'
                                })                                
                            } else {
                                res.status(200).json({
                                    message: 'user logged in',
                                    token: `Bearer ${token}`
                                })
                            }
                        })
                    }
                })
            } else {
                res.status(404).json({
                    error: 'email or password doesn\'t match'
                })
            }
        }) 
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: 'error occured'
            })
        })
})


module.exports = {
    getAllUser, 
    signupUser,
    signinUser
}