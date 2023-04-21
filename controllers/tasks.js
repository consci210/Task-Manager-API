

const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const createTask = (req,res) =>{
    console.log(req.body)
    res.json(req.body)
   
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