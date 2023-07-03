import express from "express";
import {
  createProblems,
  updateProblems,
  deleteProblems,
  getProblems,
  getAllProblems,
  getProblemsByUserID
} from "../../../controllers/SupportCenter/Problems/ManageProblems.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createProblems);

// Call UPDATE Function
 router.put("/:id", updateProblems);

// Call DELETE Function
router.delete("/:id", deleteProblems);

// call GET Function
router.get("/:id", getProblems);

// Call GET ALL Function
router.get("/", getAllProblems);

// Call GET by ProblemsID Function
router.get("/user/:id", getProblemsByUserID);

export default router;
