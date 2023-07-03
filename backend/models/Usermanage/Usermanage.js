import mongoose from "mongoose";

const ManageUserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },

  roll: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false
  }

});

export default mongoose.model("allusers", ManageUserSchema);
