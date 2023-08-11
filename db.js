const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://prosedus:1q2w3e4r5t@cluster0.rcyruou.mongodb.net/mern?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose