const express = require('express')
const mongoose = require('mongoose')
const app= express()

const uri ="mongodb+srv://sardarnabeel657:nabeelmasood1122@smartagri.5moqyoo.mongodb.net/?retryWrites=true&w=majority&appName=smartagri";

async function connect(){
    try{
        await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err);
    }
}

connect();
app.get("/api",(req,res) => {
    
    res.json({"users":["userOne","userTwo","userThree","userFour"]})


});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});