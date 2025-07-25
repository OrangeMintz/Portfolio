import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

//ROUTES's
import mail from './routes/mailRoute.js'
import project from './routes/projectsRoute.js'
import certificate from './routes/certRoute.js'


//Module Setup
const app = express()
dotenv.config();
app.use(express.json());

// Credentials
const Port = process.env.PORT
const Mongodb = process.env.MONGODb
const FrontEnd = process.env.FRONTEND

// CORS Setup
const allowedOrigins = [`${FrontEnd}`, "http://localhost:3000"];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

// app.use(cors({
//     origin: FrontEnd,
//     optionsSuccessStatus: 200,
//     credentials: true
// }));


// Connection to MongodDB
const connect = async () => {
    try {
        mongoose.connect(Mongodb)
    } catch (error) {
        console.log("Connecting to MongoDB")
    }
}

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on('disconnected', () => {
    console.log("Disconnected to MongoDB")
})

//API's
app.use('/api/mail', mail);
app.use('/api/control/project', project);
app.use('/api/control/certificate', certificate)



// Establishing Connection
app.listen(Port, () => {
    connect()
    console.log(`Connected to ${Port}`)
})
