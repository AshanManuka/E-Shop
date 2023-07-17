const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
    itemQty : {
        type : Number,
        required : true
    }

});

module.exports = mongoose.model('cart',cartSchema);