const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Fill in the Task Name "] ,
        trim : true ,
        maxlength : [ 20 , "Name can't be more than 20 characters "],
        minlength : [ 2 , "Name should be atleast 2 characters"]
    } ,
    completed : {
        type: Boolean , 
        default : false , 
        
    } ,
})

module.exports = mongoose.model('Task' , TaskSchema)
