import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

//ROUTES's
import mail from './routes/mailRoute.js'

//Module Setup
const app = express()
dotenv.config();
app.use(express.json());

// Credentials
const Port = process.env.PORT
const Mongodb = process.env.MONGODb
const FrontEnd = process.env.FRONTEND

// CORS Setup
const corsOptions = {
    origin: [FrontEnd],
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(cors(corsOptions));

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
app.use('/contact', mail);


// Establishing Connection
app.listen(Port, () =>{
    connect()
    console.log(`Connected to ${Port}`)
})
