var express = require('express');
const customer = require('../models/customer');

const router = express.Router();

//save function
router.post('/saveCustomer',async(req,res)=>{
    // code    
})

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