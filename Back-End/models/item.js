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
        type : Number,
        required : true
    },
    qtyOnHand : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('item',itemSchema)