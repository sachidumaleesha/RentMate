import mongoose  from "mongoose";

const CustomerSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: false
    },
    fname:{
        type: String,
        required: false
    },
    lname:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    avatar:{
        type: String,
        required: false
    },
})

const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;