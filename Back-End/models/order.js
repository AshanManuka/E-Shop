const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    orderId : {
        type : String,
        required : true
    },
    customerId : {
        type : String,
        required : true
    },
    itemCode: {
        type : String,
        required : true
    },
    qty: {
        type : int,
        required : true
    },
    discount : {
        type : double,
        required : true
    },
    amount : {
        type : double,
        required : true
    }
});

module.exports = mongoose.model('order',orderSchema)