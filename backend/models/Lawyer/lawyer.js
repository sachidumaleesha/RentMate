import mongoose from "mongoose";

const LawyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    education: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    courts: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
});

export default mongoose.model("Lawyer", LawyerSchema);