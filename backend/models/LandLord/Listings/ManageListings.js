import mongoose from "mongoose";

const ManageListingsSchema = new mongoose.Schema({
    landlordid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // images: {
    //     type: String,
    //     required: true
    // },
    mapLink: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
        required: true
    },
});



export default mongoose.model("Listings", ManageListingsSchema);