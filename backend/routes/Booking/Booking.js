import express from "express";
import {
    createbooking,
    updatebooking,
    deletebooking,
    getbooking,
    getAllbooking,
    getbookingByOwnerID
} from "../../controllers/Booking/Booking.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createbooking);

// Call UPDATE Function
router.put("/:id", updatebooking);

// Call DELETE Function
router.delete("/:id", deletebooking);

// call GET Function
router.get("/:id", getbooking);

// Call GET ALL Function
router.get("/", getAllbooking);

// Call GET by bookingID Function
router.get("/user/:id", getbookingByOwnerID);

export default router;
