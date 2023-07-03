import express from "express";
import {
  signUp,
  deleteUser,
  getUser,
  getAllUsers,
  login,
  updateUser,
  updatePaid
} from "../../controllers/Usermanage/Usermanage.js";

const router = express.Router();



// Call CREATE Function
router.post("/", signUp);

// Call UPDATE Function
router.put("/:id", updateUser);

// Call DELETE Function
router.delete("/:id", deleteUser);

// call GET Function
router.get("/:id", getUser);

// Call GET ALL Function
router.get("/", getAllUsers);

//login Function
router.post("/login", login)

//update paid
router.put("/updatepaid/:id", updatePaid)

// // Call CREATE Function
// router.post("/", createUser);

// // Call UPDATE Function
// router.put("/:id", updateUser);

// // Call DELETE Function
// router.delete("/:id", deleteUser);

// // call GET Function
// router.get("/:id", getUser);

// // Call GET ALL Function
// router.get("/", getAllUsers);

export default router;
