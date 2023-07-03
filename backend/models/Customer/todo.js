import mongoose  from "mongoose";

const CustomertodoSchema = new mongoose.Schema({
    userid :{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})
const Todo = mongoose.model('Todo', CustomertodoSchema);

export default Todo;