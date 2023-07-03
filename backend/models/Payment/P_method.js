import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    cardType:{
        type: String,
        // required: true,
    },

    name:{
        type: String,
        // required: true,
    },

    cardNumber:{
        type: Number,
        // required: true,
        length:16
    },

    Exp_month:{
        type: Number,
        // required: true,
    },

    Exp_year:{
        type: Number,
        // required: true,
    },

    cvv:{
        type: Number,
        // required: true,
        length: 3
    }
})

const Card = mongoose.model("CardDetail", CardSchema );

// module.exports = Card;
export default  Card;