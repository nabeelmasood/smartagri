require('dotenv').config()

const express = require('express')

const mongoose=require('mongoose')
const productsRoutes= require('./routes/products')
const categoryRoutes= require('./routes/category')


//  express app
const app = express()


//middleware
app.use(express.json())   // check for data for json requests

app.use((req, res, next) =>{
    console.log(req.path,req.method);
    next();
});
 

//routes
app.use('/api/products',productsRoutes)
app.use('/api/category',categoryRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request after connection is established with the database
        app.listen(process.env.PORT,()=>{
        console.log('Connect to DB & Server is running on port 4000!');
        })
    })
    .catch((err)=>{
        console.log(err)
    });



