import express from "express";
import Reservation from '../../models/Payment/reservation.js'

const router = express.Router();

router.route("/add").post((req, res) =>{
    const customerid = req.body.customerid
    const landloardID = req.body.landloardID
    const propertyname = req.body.propertyname
    const type = req.body.type
    const reserveItem = req.body.reserveItem
    const cus_name = req.body.cus_name
    const contactNo = req.body.contactNo
    const cus_address = req.body.address
    const bookingDate = req.body.bookingDate
    const endDate = req.body.endDate
    const pro_duration = req.body.duration
    const vehicleID = req.body.vehicleID
    const sLocation = req.body.sLocation
    const rLocation = req.body.rLocation
    const distance = req.body.distance
    const amount = req.body.amount
    const cardNumber = req.body.cardNumber
    const propBeds = req.body.propBeds
    const propRooms = req.body.propRooms
    const propBaths = req.body.propBaths
    const propprice = req.body.propprice
    const proptype = req.body.proptype
    const propcalculatedPrice = req.body.propcalculatedPrice
    const proptaxPrice = req.body.proptaxPrice

    const newReservation = new Reservation({
        customerid,
        landloardID,
        propertyname,
        type,
        reserveItem,
        cus_name,
        contactNo,
        cus_address,
        bookingDate,
        endDate,
        pro_duration,
        vehicleID,
        sLocation,
        rLocation,
        distance,
        amount,
        cardNumber,
        propBeds,
        propRooms,
        propBaths,
        propprice,
        proptype,
        propcalculatedPrice,
        proptaxPrice
    })

    newReservation.save().then(() => {
        res.json("Reservation details added")
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/").get((req, res)=> {

    Reservation.find().then((reservation) => {
        res.json(reservation)
    }).catch((err) =>{
        console.log(err)
    })
 })

router.route("/get/:id").get(async(req, res) =>{
    let paymentID = req.params.id;
    await Reservation.findById(paymentID)
    .then((reservation) => {
        res.status(200).send({status: "reservation Details fetched", reservation })
    }).catch(() => {
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

export default router;