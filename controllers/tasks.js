const Task = require('../models/task')

const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task}) 
    }catch(err){
        console.log(err)
    }
    
}

const getTask = (req,res) =>{
    res.send('get a single task ')
}

const updateTask = (req,res) =>{
    res.send('update a single task ')
}

const deleteTask = (req,res) =>{
    res.send('delete a single task ')
}



module.exports= {
    getAllTasks , 
    createTask ,
    getTask ,
    updateTask ,
    deleteTask 
}