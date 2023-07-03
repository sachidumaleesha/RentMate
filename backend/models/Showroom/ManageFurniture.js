import mongoose  from "mongoose";

const ManageFurnitureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    quantity: {
        type: Number,
        required: true,
        min: 0,
    },

   Category: {
        type: String,
        required: true
    },
  
    images: {
        type: String,
        required: true
    },

        // keys added
        showroomID: {
            type: String,
            required: true
        },
});

export default mongoose.model("Furniture", ManageFurnitureSchema);
