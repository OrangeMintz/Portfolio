import mongoose from 'mongoose'
const {Schema} = mongoose

const mailSchema = new Schema({
    Subject:{
        type: String,
        required: true
    },

    Name:[{
        type: String,
    }],

    email:[{
        type: String,
        required: true
    }],

    message:[{
        type: String,
        required: true
    }],

    date:{
        type: String
    },

    }, { timestamps: true }
)

const mailModel = mongoose.model('Mail', mailSchema);
export default mailModel;