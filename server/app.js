import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

//ROUTES's
import post from './routes/postRoute.js'

//Module Setup
const app = express()
dotenv.config();
app.use(express.json());

// Credentials
const Port = process.env.PORT
const Mongodb = process.env.MONGODb

// Connection to MongodDB
const connect = async() =>{
    try{
        mongoose.connect(Mongodb)
    }catch(error){
        console.log("Connecting to MongoDB")
    }
}

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on('disconnected', () =>{
    console.log("Disconnected to MongoDB")
})

//API's
app.use('/api/post', post);

// Establishing Connection
app.listen(Port, () =>{
    connect()
    console.log(`Connecting to ${Port}`)
})
