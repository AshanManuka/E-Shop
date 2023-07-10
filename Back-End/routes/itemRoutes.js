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
    const obId = req.params.id;
    const newObId = obId.slice(1,obId.length);
    
      item.findByIdAndUpdate(newObId, { 
        $set: req.body
      })
          .then(() => {
              return res.status(200).json({
                  success: "updated successfully"
              });
          })
          .catch(err => {
              return res.status(400).json({ error: err });
          });
   
});


//delete
 router.delete('/delete:id',(req,res)=>{
  const obId = req.params.id;
  const newObId = obId.slice(1,obId.length);
  console.log(newObId);
    
  item.findByIdAndRemove(newObId) .then(() => {
    return res.status(200).json({
        success: "Delete successfully"
    });
})
.catch(err => {
    return res.status(400).json({ error: err });
});
 });

 module.exports = router;