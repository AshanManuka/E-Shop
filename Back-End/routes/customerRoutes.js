var express = require('express');
const customer = require('../models/customer');

const router = express.Router();

//save function
router.post('/saveCustomer',async(req,res)=>{
    
    let newCustomer = new customer(req.body);
    console.log(newCustomer);
    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({ error : err});
        }
        return res.status(200).json({ success : "Customer was Saved !"});
    });
});

//get organizers
router.get("/getCustomer", async (req, res) => {
    // code
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