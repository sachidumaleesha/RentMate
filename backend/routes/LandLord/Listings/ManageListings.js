import express from "express";
import {
  createListing,
  updateListing,
  deleteListing,
  getListing,
  getAllListings,
} from "../../../controllers/LandLord/Listings/ManageListings.js";
import multer from "multer";

const router = express.Router();

// Create multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set the destination folder where images will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Generate a unique filename
    cb(null, uniqueSuffix + "-" + file.originalname); // Set the filename
  },
});

// Create multer upload instance
const upload = multer({ storage: storage });

// Call CREATE Function with image upload
router.post("/add", upload.array("images", 5), createListing);

// Call UPDATE Function
router.put("/:id", updateListing);

// Call DELETE Function
router.delete("/:id", deleteListing);

// Call GET Function
router.get("/:id", getListing);

// Call GET ALL Function
router.get("/", getAllListings);

export default router;
