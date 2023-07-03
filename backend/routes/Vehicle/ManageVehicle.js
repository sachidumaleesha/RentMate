// import express from "express";
// import {
//   createVehicle,
//   updateVehicle,
//   deleteVehicle,
//   getVehicle,
//   getAllVehicle,
// } from "../../controllers/Vehicle/ManageVehicle.js";

// const router = express.Router();

// // Call CREATE Function
// router.post("/", createVehicle);

// // Call UPDATE Function
// router.put("/:id", updateVehicle);

// // Call DELETE Function
// router.delete("/:id", deleteVehicle);

// // call GET Function
// router.get("/:id", getVehicle);

// // Call GET ALL Function
// router.get("/", getAllVehicle);

// export default router;
import express from "express";
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicle,
  getAllVehicle,
  getVehicleByUserID,
  getVehicleByStatus,
  getVehicleByRandom
} from "../../controllers/Vehicle/ManageVehicle.js";

const router = express.Router();

// Call CREATE Function
router.post("/", createVehicle);

// Call UPDATE Function
router.put("/:id", updateVehicle);

// Call DELETE Function
router.delete("/:id", deleteVehicle);

// call GET Function
router.get("/:id", getVehicle);

// Call GET ALL Function
router.get("/", getAllVehicle);

// Call GET by userID Function
router.get("/user/:id", getVehicleByUserID);

// Call GET by status Function
router.get("/active", getVehicleByStatus);

// Call GET by random Function
router.get("/get/random", getVehicleByRandom);

export default router;
