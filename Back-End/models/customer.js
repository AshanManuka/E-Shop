const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    cusName : {
        type : String,
        required : true
    },
    cusContact: {
        type : Number,
        required : true
    },
    cusAddress : {
        type : String,
        required : true
    },
    cusUserName : {
        type : String,
        required : true
    },
    cusPassword : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('customer',customerSchema)