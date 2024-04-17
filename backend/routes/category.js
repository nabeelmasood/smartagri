const express = require('express');
const {
    createcategory,
    getallcategory,
    getcategory,
    deletecategory,
    updatecategory

}= require('../controllers/categorycontroller')

const router = express.Router()

// Get all category
router.get('/', getallcategory)

// Get a single  category
router.get('/:id',getcategory)

// Create a new category
router.post('/',createcategory)

// Delete a single category
router.delete('/:id',deletecategory)

// Update a single category
router.patch('/:id',updatecategory)



module .exports = router