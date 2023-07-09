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
router.put('/update:id',(req,res)=>{
    
    
  const customerId = req.params.id;
  const updateData = req.body;

  customer.findOneAndUpdate({ _id: customerId }, updateData, { new: true })
    .then(updatedCustomer => {
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }

      return res.status(200).json({
        success: 'Customer updated successfully',
        customer: updatedCustomer
      });
    })
    .catch(error => {
      return res.status(400).json({ error: error.message });
    });
    
    
    // customer.findByIdAndUpdate(req.params.id, {
    //     $set: req.body
    // })
    //     .then(() => {
    //         return res.status(200).json({
    //             success: "updated successfully"
    //         });
    //     })
    //     .catch(err => {
    //         return res.status(400).json({ error: err });
    //     });
    
   
});


//delete
 router.delete('deleteCustomer/delete:id',(req,res)=>{
    // code
 });

 module.exports = router;