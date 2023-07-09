var express = require('express');
const order = require('../models/order');

const router = express.Router();

//save function
router.post('/saveOrder',async(req,res)=>{
    console.log("Request Order : ",req.body);
    const data=await order.create(req.body);
    res.send("Order Saved Succesfully!!");   
})

//get 
router.get("/getOrder", async (req, res) => {
    // code
});

 //update
router.put('putOrder/update:id',(req,res)=>{
    // code
});


//delete
 router.delete('deleteOrder/delete:id',(req,res)=>{
    // code
 });

 module.exports = router;