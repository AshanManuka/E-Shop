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


router.put('/updateItem/:itemCode', async (req, res) => {
    const itemCodeToUpdate = req.params.itemCode;
  
    try {
      // Find the item by itemCode
      const itemToUpdate = await item.findOne({ itemCode: itemCodeToUpdate });
  
      if (!itemToUpdate) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      // Update the item's fields
      if (req.body.itemName) {
        itemToUpdate.itemName = req.body.itemName;
      }
  
      if (req.body.price) {
        itemToUpdate.price = req.body.price;
      }
  
      if (req.body.qtyOnHand) {
        itemToUpdate.qtyOnHand = req.body.qtyOnHand;
      }
  
      // Save the updated item
      const updatedItem = await itemToUpdate.save();
  
      return res.status(200).json({
        success: "Item updated successfully",
        updatedItem: updatedItem
      });
    } catch (error) {
      console.error("Error updating item:", error);
      return res.status(500).json({ error: "Error updating item" });
    }
  });
  


router.delete('/deleteItem/:id', (req, res) => {
    const obId = req.params.id;
    console.log("send from :" + obId);    
    item.findOneAndRemove({ itemCode: obId })
      .then(() => {
        return res.status(200).json({
          success: "Delete successfully"
        });
      })
      .catch(err => {
        return res.status(400).json({ error: err });
      });
  });

 module.exports = router;