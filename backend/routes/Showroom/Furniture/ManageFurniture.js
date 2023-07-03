import express from "express";
import {
  createFurniture,
  updateFurniture,
  deleteFurniture,
  getFurniture,
  getAllFurniture,
  getFurnitureByCategoryandShowroomID,
  getFurnitureByShowroomID
} from "../../../controllers/Showroom/Furniture/ManageFurniture.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createFurniture);

// Call UPDATE Function
router.put("/:id", updateFurniture);

// Call DELETE Function
router.delete("/:id", deleteFurniture);

// call GET Function
router.get("/:id", getFurniture);

// Call GET ALL Function
router.get("/", getAllFurniture);

// Call GET by showroomID and category Function
router.get("/showroom/:showroomID/category/:category",getFurnitureByCategoryandShowroomID)

//call GET by showroomID Function
router.get("/showroom/:id",getFurnitureByShowroomID)

export default router;
