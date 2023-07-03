import mongoose from "mongoose";

const BookingVehicleSchema = new mongoose.Schema({

    deliveryLocation: {
        type: String,
        required: true
    },

    deliveryDate: {
        type: String,
        required: true
    },

    returnLocation: {
        type: String,
        required: true
    },

    distance: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    vehicleID: {
        type: String,
        required: true
    },

    customerID: {
        type: String,
        required: true
    },

    vehicleOwner: {
        type: String,
        required: true
    }

});

export default mongoose.model("bookingvehicle", BookingVehicleSchema);