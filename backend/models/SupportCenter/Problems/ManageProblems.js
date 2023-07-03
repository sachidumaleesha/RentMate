import mongoose from "mongoose";

const ManageProblemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // address: {
    //     type: String,
    //     required: true
    // },
   
    contactNumber: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    problemtype: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },

    reply: {
        type: String,
        required: false
    },

    userID: {
        type: String,
        required: true
    }
});

export default mongoose.model("Problems", ManageProblemsSchema);