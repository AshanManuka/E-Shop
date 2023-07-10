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
        console.log("Sent Customer Data list");
        res.send(customerList);
    } catch (error) {
        return error
    }
});

 //update
router.put('/updateCus:customerId',(req,res)=>{

  const obId = req.params.customerId;
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
    
  customer.findByIdAndRemove(newObId) .then(() => {
    return res.status(200).json({
        success: "Delete successfully"
    });
})
.catch(err => {
    return res.status(400).json({ error: err });
});
    
 });

 module.exports = router;