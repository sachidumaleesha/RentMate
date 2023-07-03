import mongoose  from "mongoose";

const CustomerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unqiue: true
    },
    email:{
        type: String,
        required: true,
        unqiue: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
},
    {timeseries: true}
)
const Customer = mongoose.model('Users', CustomerSchema);

export default Customer;