const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 8000;


mongoose.connect("mongodb://localhost:27017/togakadeApp",{
    }).then(() => {
    console.log("DB Connetion Successfull");
})
    .catch((err) => {
        console.log(err.message);
    });

app.listen(PORT,()=>{
    console.log("Application is Running !!!");
});

