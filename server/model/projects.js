import mongoose from 'mongoose'
const { Schema } = mongoose

const projectSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    tags: {
        type: String,
        required: true
    },

    repository: {
        type: String,
    },

    preview: {
        type: String,
    },

    status: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    subheading: {
        type: String,
    },

    description: {
        type: String,
    },

    images: {
        type: [String],
        required: true
    }

}, { timestamps: true }
)

const projectModel = mongoose.model('Project', projectSchema);
export default projectModel;