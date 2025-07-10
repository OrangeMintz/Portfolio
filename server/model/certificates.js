import mongoose from "mongoose";
const { Schema } = mongoose

const certificateSchema = new Schema({
    event: {
        type: String,
        required: true
    },

    certificate: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    preview: {
        type: String,
    }
}, { timestamps: true }
);

const certificateModel = mongoose.model("Certificate", certificateSchema);
export default certificateModel;