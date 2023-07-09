const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    customerId : {
        type : String,
        required : true
    },
    customerName : {
        type : String,
        required : true
    },
    contactNumber: {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('customer',customerSchema)