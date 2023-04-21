// Import modules 
const express = require('express')
const app = express() 
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()



// Middleware & Static files 
app.use(express.static('./public'))
app.use(express.json())



// Routes 
app.use('/api/v1/tasks' , tasks )
const port = 3000 


// Function to connect DB then start server 
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server started .... listening on port ${port} `))

    }catch(err){
        console.log(err)
    }
}

// Start server 
start() 
