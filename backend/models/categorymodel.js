const  mongoose  = require("mongoose")

const Schema = mongoose.Schema

const categorySchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports= mongoose.model('Category', categorySchema)
