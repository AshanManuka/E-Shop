const express = require('express')
const app = express();
var cors = require('cors');


app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// get  routers

const customer = require('./routes/customerRoutes');
const item = require('./routes/itemRoutes');
const order = require('./routes/orderRoutes');



// get all
app.use('/customer',customer)
app.use('/item', item)
app.use('/order', order)


module.exports = app;