var express = require('express');
const item = require('../models/item');

const router = express.Router();

//save function
router.post('/saveItem',async(req,res)=>{
    console.log("Request Item : ",req.body);
    const data=await item.create(req.body);
    res.send("Item Saved Succesfully!!");   
})

//get 
router.get("/getItem", async (req, res) => {
    try {
        const itemList = await item.find();
        res.send(itemList);
    } catch (error) {
        return error
    }
    
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