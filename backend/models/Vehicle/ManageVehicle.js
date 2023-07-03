// import mongoose from "mongoose";

// const ManageVehicleSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
    
//     email: {
//         type: String,
//         required: true
//     },
//     contact: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         default: "Pending",
//         required: true
//     },
//     image: {
//         type: String, 
//         required: true
//     },
 


// });

// export default mongoose.model("Vehicle", ManageVehicleSchema);
import mongoose from "mongoose";

const ManageVehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
    },

    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    userID: {
        type: String,
        required: true
    }
});

export default mongoose.model("Vehicle", ManageVehicleSchema);