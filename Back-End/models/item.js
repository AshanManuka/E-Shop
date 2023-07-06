const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    itemCode : {
        type : String,
        required : true
    },
    itemName : {
        type : String,
        required : true
    },
    price: {
        type : double,
        required : true
    },
    qtyOnHand : {
        type : BigInt,
        required : true
    }
});

module.exports = mongoose.model('item',itemSchema)