import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  idNo: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

 
 
 
});


export default mongoose.model("BlogPost",blogSchema);