import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({

    customerid: {
        type: String
    },
    landloardID: {
        type: String
    },
    propertyname: {
        type: String
    },
    type: {
        type: String
    },
    reserveItem:{
        type: String
    },

    cus_name:{
        type: String
    },

    contactNo: {
        type: String
    },

    cus_address: {
        type: String
    },

    bookingDate: {
        type: String
    },

    endDate: {
        type: String
    },

    pro_duration: {
        type: Number
    },

    vehicleID: {
        type: String
    },

    sLocation: {
        type: String
    },

    rLocation: {
        type: String
    },

    distance:{
        type: Number
    },

    amount: {
        type: Number
    },

    cardNumber: {
        type: Number
    },

    propBeds: {
        type: String
    },

    propRooms: {
        type: String
    },

    propBaths: {
        type: String
    },

    propprice: {
        type: String
    },

    proptype: {
        type: String
    },

    propcalculatedPrice: {
        type: String
    },

    proptaxPrice: {
        type: String
    }
})

const Reservation = mongoose.model("reservationDetail", ReservationSchema );

export default Reservation;