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
router.get("/getallOrder", async (req, res) => {
    try {
        const orderList = await order.find();
        res.send(orderList);
    } catch (error) {
        return error
    }
});

 //update
router.put('putOrder/update:id',(req,res)=>{
    const obId = req.params.id;
    const newObId = obId.slice(1,obId.length);
    
      customer.findByIdAndUpdate(newObId, { 
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
    
  order.findByIdAndRemove(newObId) .then(() => {
    return res.status(200).json({
        success: "Delete successfully"
    });
})
.catch(err => {
    return res.status(400).json({ error: err });
});
 });

 module.exports = router;