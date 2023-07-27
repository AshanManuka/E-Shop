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

router.post('/login', async (req, res) => {
    var uName = req.body.cusUserName;
    var pWord = req.body.cusPassword;
    
    const customerOne = await customer.findOne({cusUserName : uName})
    const customerTwo = await customer.findOne({cusPassword : pWord})

    if(customerOne.equals(customerTwo)){
        return res.status(200).json({
            success: "Login successfully",
          });
        }else{
            return res.status(500).json({ error: "Wrong try" });
        }   
    }


  );


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