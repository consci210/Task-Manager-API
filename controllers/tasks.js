const Task = require('../models/task')

// GET request to get all the available tasks 
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg : err})
        console.log(err) 
    }
}

// POST request to create a task 
const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task}) 
    }catch(err){
        res.status(500).json({msg : err})
        console.log(err)
    }
}


// GET request to get a specific task 
const getTask =  async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id :taskID})
        // if task is empty 
        if(!task){  
            return res.status(404).json({msg:`No task with id : ${taskID}`}) ;
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(500).json({msg : err})
        console.log(err)
    }
}


// UPDATE request to edit a specific task 
const updateTask = async (req,res) =>{

    try {
        const {id:taskID} = req.params ;
        res.status(200).json({id:taskID , data:req.body })
        const task = await Task.findOneAndUpdate({_id:taskID} , req.body , {
            new :true ,
            runValidators :true 
        })
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`}) ;
        }
    } catch (err) {
        res.status(500).json({msg : err})
        console.log(err)
    }
}


// DELETE request to delete a specific task 
const deleteTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id :taskID})
        // if task doesnt exist 
        if(!task){  
            return res.status(404).json({msg:`No task with id : ${taskID}`}) ;
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(500).json({msg : err})
        console.log(err)
    }
}



module.exports= {
    getAllTasks , 
    createTask ,
    getTask ,
    updateTask ,
    deleteTask 
}