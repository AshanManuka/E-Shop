var express = require('express');
const customer = require('../models/customer');

const router = express.Router();

//save function
router.post('/saveCustomer',async(req,res)=>{
    console.log("Request customer : ",req.body);
    const data=await customer.create(req.body);
    res.send("Customer Saved Succesfully!!");
});

//get 
router.get("/getCustomer", async (req, res) => {
    try {
        const customerList = await customer.find();
        res.send(customerList);
    } catch (error) {
        return error
    }
});

 //update
router.put('putCustomer/update:id',(req,res)=>{
    // code
});


//delete
 router.delete('deleteCustomer/delete:id',(req,res)=>{
    // code
 });

 module.exports = router;