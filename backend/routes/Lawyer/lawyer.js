import express from "express";
import {
  createLawyer,
  updateLawyer,
  deleteLawyer,
  getLawyer,
  getAllLawyer,
  getLawyerByUserId,
  getLawyerRandom
} from "../../controllers/Lawyer/lawyer.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createLawyer);

//Call UPDATE Function
router.put("/:id", updateLawyer);

// Call DELETE Function
router.delete("/:id", deleteLawyer);

// call GET Function
router.get("/:id", getLawyer);

// Call GET ALL Function
router.get("/", getAllLawyer);

//get lawyer by userid
router.get("/user/:id", getLawyerByUserId);

//get lawyer by random
router.get("/get/random", getLawyerRandom);


export default router;
