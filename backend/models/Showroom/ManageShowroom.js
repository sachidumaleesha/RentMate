import mongoose  from "mongoose";

const ManageShowroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contactNumber: {
        type: Number,
        required: true,
        min: 0,
    },

    address: {
        type: String,
        required: true,
        min: 0,
    },

    city:  {
        type: String,
        required: true
    },

    openingTime:  {
        type: String,
        required: true
    },
  
    // image atrribute added

    image1: {
        type: String,
        required: true
    },

    image2: {
        type: String,
        required: true
    },

    image3: {
        type: String,
        required: true
    },

    //userID attttribute added
    userID: {
        type: String,
        required: true
    },
});

export default mongoose.model("Showroom", ManageShowroomSchema);
