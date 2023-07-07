var express = require('express');
const item = require('../models/item');

const router = express.Router();

//save function
router.post('/saveItem',async(req,res)=>{
    // code    
})

//get organizers
router.get("/getItem", async (req, res) => {
    // code
});

 //update
router.put('putItem/update:id',(req,res)=>{
    // code
});


//delete
 router.delete('deleteItem/delete:id',(req,res)=>{
    // code
 });

 module.exports = router;