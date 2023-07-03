import express from "express";
import {
  createShowroom,
  updateShowroom,
  getShowroom,
  getAllShowroom,
  getShowroomByUserId,
  getRandomShowroom
} from "../../../controllers/Showroom/Create_Showroom/ManageShowroom.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createShowroom);

// Call UPDATE Function
router.put("/:id", updateShowroom);

// Call DELETE Function
// router.delete("/:id", deleteShowroom);

// call GET Function
router.get("/:id", getShowroom);

// Call GET ALL Function
router.get("/", getAllShowroom);


// Call GET by showroomID Function
router.get("/user/:id", getShowroomByUserId);

// Call GET by showroomID Function
router.get("/get/random", getRandomShowroom);

export default router;
