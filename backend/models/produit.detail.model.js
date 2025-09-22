const { models } = require("mongoose");
const {mongoose} = require('mongoose')

const Details= new mongoose.Schema({
    // nom:String,
    // prix:String,
    image1:String,
    image2:String,
    imgae3:String,
    description:String
    
})

module.exports=mongoose.model('Detaila', Details);