import express from "express";
import {
    createrevenue,
    updaterevenue,
    deleterevenue,
    getrevenue,
    getAllrevenue,
} from "../../controllers/Revenue/Revenue.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createrevenue);

// Call UPDATE Function
router.put("/:id", updaterevenue);

// Call DELETE Function
router.delete("/:id", deleterevenue);

// call GET Function
router.get("/:id", getrevenue);

// Call GET ALL Function
router.get("/", getAllrevenue);

export default router;
