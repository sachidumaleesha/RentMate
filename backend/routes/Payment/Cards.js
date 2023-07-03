// const router = require("express").Router();
// let Card = require("./models/Payment/P_method");
import express from "express";
import Card  from "../../models/Payment/P_method.js";

const router = express.Router();

 router.route("/add").post((req, res) =>{
    const cardType = req.body.cardType
    const name = req.body.name;
    const cardNumber = req.body.cardNumber;
    const Exp_month = req.body.Exp_month;
    const Exp_year = req.body.Exp_year;
    const cvv = req.body.cvv;

    const newCard = new Card({
        cardType,
        name,
        cardNumber,
        Exp_month,
        Exp_year,
        cvv
    })

    newCard.save().then(() => {
        res.json("Crd Added")
    }).catch((err) =>{
        console.log(err);
    })
 })

 router.route("/").get((req, res)=> {

    Card.find().then((cards) => {
        res.json(cards)
    }).catch((err) =>{
        console.log(err)
    })
 })

 router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {cardType, name, cardNumber, Exp_month, Exp_year, cvv } = req.body;

    const updateCard = {
        cardType,
        name,
        cardNumber,
        Exp_month,
        Exp_year,
        cvv  
    }

    const update = await Card.findByIdAndUpdate(userId, updateCard)
    .then(() => {
        res.status(200).send({status: "Card Updated"})
        }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
        })
    })

    router.route("/delete/:id").delete(async (req,res) => {
        let userID = req.params.id;

        await Card.findByIdAndDelete(userID).then(() =>{
            res.status(200).send({status: "Card Deleted"});
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({status: "Error with delete user", error: err.message});
        })
    })

    router.route("/get/:id").get(async(req, res) =>{
        let userID = req.params.id;
        await Card.findById(userID)
        .then((card) => {
            res.status(200).send({status: "Card Details fetched", card })
        }).catch(() => {
            res.status(500).send({status: "Error with get user", error: err.message});
        })
    })

//  module.exports = router;
export default router;