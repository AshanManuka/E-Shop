const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


//App middleware
app.use(bodyParser.json());

//import routes
const customer = require('./routes/customerRoutes');
const item = require('./routes/itemRoutes');
const order = require('./routes/orderRoutes');
const cart = require('./routes/cartRoutes');


// routes middlewares
app.use('/customer',customer)
app.use('/item', item)
app.use('/order', order)
app.use('/cart', cart)


const PORT = 8000;


mongoose.connect("mongodb://localhost:27017/togakadeApp",{
    }).then(() => {
    console.log("DB Connetion Successfull");
})
    .catch((err) => {
        console.log(err.message);
    });

app.listen(PORT,()=>{
    console.log("Application is Running !!!");
});

