const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
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

module.exports = mongoose.model('cart',cartSchema);