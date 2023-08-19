const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://meher:Meher2003@cluster0.emn7jgl.mongodb.net/KarWaan' , {useUnifiedTopology: true , useNewUrlParser: true})

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
