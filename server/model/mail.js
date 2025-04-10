import mongoose from 'mongoose'
const { Schema } = mongoose

const mailSchema = new Schema({

    subject: {
        type: String,
        required: true
    },

    name: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    date: {
        type: String
    },

}, { timestamps: true }
)

const mailModel = mongoose.model('Mail', mailSchema);
export default mailModel;