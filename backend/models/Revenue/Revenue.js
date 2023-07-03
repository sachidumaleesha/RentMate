import mongoose from "mongoose";

const RevenueVehicleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required:true
       
    },
    contact: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require:true
        
    },
    price: {
        type: String,
        require:true
        
    },
 


});

export default mongoose.model("revenuevehicle", RevenueVehicleSchema);