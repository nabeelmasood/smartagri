const express = require('express');
const {
    createproduct,
    getallproduct,
    getproduct,
    deleteproduct,
    updateproduct

}= require('../controllers/productcontroller')

const router = express.Router()

// Get all product
router.get('/', getallproduct)

// Get a single  product
router.get('/:id',getproduct)

// Create a new product
router.post('/',createproduct)

// Delete a single product
router.delete('/:id',deleteproduct)

// Update a single product
router.patch('/:id',updateproduct)



module .exports = router