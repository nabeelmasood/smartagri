const categories = require('../models/categorymodel')
const mongoose =  require('mongoose')


// get all categorys
const getallcategory = async (req,res)=>{
    const categorys = await categories.find({}).sort({createdAt:-1})

    res.status(200).json(categorys)
} 


// get a single category

const getcategory = async (req,res)=>{
    const {id} = req.params

    // check weather the id is correct or ont
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such category'})
    }
    const category = await categories.findById(id)

    if (!category)
    {
        return res.status(404).json({error:'No such category'})
    }
    res.status(200).json(category)
} 

// create a new category
const createcategory = async (req,res)=>{
    const {Name, Description} = req.body
    //add doc to db
    try{
        const category = await categories.create({Name,Description})
        res.status(200).json(category)
    }catch(error){    
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'Post a new category'})
}

// delete a single category
const deletecategory = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such category'})
    }
    const category = await categories.findOneAndDelete({_id: id})

    if (!category)
    {
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(category)
        
} 

// update a category
const updatecategory = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such category'})
    }
    const category = await categories.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!category)
    {
        return res.status(404).json({error:'No such category'})
    }
    res.status(200).json(category)
        
} 


module.exports ={
    createcategory,
    getallcategory,
    getcategory,
    deletecategory,
    updatecategory

}