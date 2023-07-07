var express = require('express');
const order = require('../models/order');

const router = express.Router();

//save function
router.post('/saveOrder',async(req,res)=>{
    // code    
})

//get organizers
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