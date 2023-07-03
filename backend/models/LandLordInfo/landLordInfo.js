import mongoose from "mongoose";

const LandLordInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    currentCity: {
        type: String,
        required: false
    }, 
});

export default mongoose.model("landlord_Info", LandLordInfoSchema);

