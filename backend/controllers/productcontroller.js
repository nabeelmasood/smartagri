const Products = require('../models/productmodel')
const mongoose =  require('mongoose')


// get all products
const getallproduct = async (req,res)=>{
    const products = await Products.find({}).sort({createdAt:-1})

    res.status(200).json(products)
} 


// get a single product

const getproduct = async (req,res)=>{
    const {id} = req.params

    // check weather the id is correct or ont
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }
    const product = await Products.findById(id)

    if (!product)
    {
        return res.status(404).json({error:'No such Product'})
    }
    res.status(200).json(product)
} 

// create a new product
const createproduct = async (req, res) => {
    const { Title, Price, Description } = req.body;
    try {
        // Add document to the database
        const product = await Products.create({ Title, Price, Description });
        res.status(201).json(product); // Send the created product as response
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle error properly
    }
};


// delete a single product
const deleteproduct = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }
    const product = await Products.findOneAndDelete({_id: id})

    if (!product)
    {
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(product)
        
} 

// update a product
const updateproduct = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }
    const product = await Products.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!product)
    {
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(product)
        
} 


module.exports ={
    createproduct,
    getallproduct,
    getproduct,
    deleteproduct,
    updateproduct

}