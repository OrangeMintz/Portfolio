import mongoose from 'mongoose'
const {Schema} = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    heading:[{
        type: String,
        required: true
    }],

    subheading:[{
        type: String
    }],

    text:[{
        type: String
    }],

    image:[{
        type: String
    }],

    date:{
        type: String
    },

    }, { timestamps: true }
)

const postModel = mongoose.model('Post', postSchema);
export default postModel;