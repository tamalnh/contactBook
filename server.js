const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./api/config') 
const contactRoute = require('./api/route/contactRoute');
const userRoute = require('./api/route/userRoute');

const app = express();




const PORT = process.env.PORT || 5000;

mongoose.connect(config.dbURL, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connected....')
}).catch(err => {
    console.log(`Database connection faild ${err}`)
})
mongoose.Promise = global.Promise;


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/contacts', contactRoute);
app.use('/api/users', userRoute);

app.use((req, res, next) => {
    let error = new Error ('error occured')
        error.status = 404;

    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    res.json({
        error
    })
})


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
    
})