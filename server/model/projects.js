import mongoose from 'mongoose'
const { Schema } = mongoose

const projectSchema = new Schema({

    subject: {
        type: String,
        required: true
    },

}, { timestamps: true }
)

const projectModel = mongoose.model('Project', projectSchema);
export default projectModel;