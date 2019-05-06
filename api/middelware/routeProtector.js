const jwt = require('jsonwebtoken');
const config = require('./../config');


const Authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        if(token){
            jwt.verify(token, config.SECRET_KEY, (err, decode) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({
                        error: 'auth faild'
                    })                    
                }else{
                    req.user = decode
                    console.log(req.user)
                    next()
                }
            })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'auth faild'
        })        
    }
}


module.exports = Authenticate;