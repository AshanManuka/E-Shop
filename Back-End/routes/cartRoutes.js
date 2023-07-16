var express = require('express');
const cart = require('../models/cart');

const router = express.Router();

//save function
router.post('/saveCart',async(req,res)=>{
    console.log("Request Cart : ",req.body);
    const data=await cart.create(req.body);
    res.send("Cart Saved Succesfully!!");   
})

//get 
router.get("/getCart", async (req, res) => {
    try {
        const cartList = await cart.find();
        console.log(cartList);
        res.send(cartList);
    } catch (error) {
        return error
    }
    
});

 //update
router.put('putCart/update:id',(req,res)=>{
    const obId = req.params.id;
    const newObId = obId.slice(1,obId.length);
    
      cart.findByIdAndUpdate(newObId, { 
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
    
  cart.findByIdAndRemove(newObId) .then(() => {
    return res.status(200).json({
        success: "Delete successfully"
    });
})
.catch(err => {
    return res.status(400).json({ error: err });
});
 });

 module.exports = router;