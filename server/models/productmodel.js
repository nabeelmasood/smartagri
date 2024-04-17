const  mongoose  = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports= mongoose.model('Product', productSchema)
