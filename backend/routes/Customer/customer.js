import express from "express";
import {createCustomer, deleteCustomer, getCustomer, getTodo, insertTodo, updateCustomer_address, updateCustomer_city, updateCustomer_email, updateCustomer_name, updateCustomer_phone,UpdateAvatar,updatePassword ,getCustomerbasic, getpropertybooking, updatepropertybooking, deletepropertybooking} from "../../controllers/customer.js";
import {verifyAdmin, verifyToken, verifyUser } from "../../utils/verifyToken.js";

const router = express.Router();



// router.get("/checkauthentication", verifyToken, (req, res,next) => {
//   res.send("Hi You are authenticated")
// })

router.get("/checkauthentication", verifyToken);

router.get("/checkuser/:id", verifyUser, (req, res,next) => {
  res.send("Hi Yoy can do anuthing")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res,next) => {
  res.send("Hi admin You can do anything")
})


//create
router.post("/",createCustomer);
// //upload pic
// router.post("/upload", uploadProfilePic)


//UPDATE name
router.put("/updatename/:id", updateCustomer_name)

//update email
router.put("/updateemail/:id",updateCustomer_email)

//update phone
router.put("/updatephone/:id",updateCustomer_phone)

//update address
router.put("/updateaddress/:id",updateCustomer_address)

//udate city
router.put("/updatecity/:id",updateCustomer_city)

//update avatar
router.put("/updateavatar/:id",UpdateAvatar)

//update password
router.put("/updatepassword/:id",updatePassword)

//Get data
router.get("/customer_info/:id",getCustomer)

//get basic data
router.get("/customer_basic_info/:id",getCustomerbasic)

//Delete
router.delete("/delete_customer/:id", deleteCustomer)

//insert todo
router.post("/insert/", insertTodo)

//get todo
router.get("/gettodo/:id", getTodo)

//get proprty booking data
router.get("/getpropertybooking/:id", getpropertybooking)

//update property booking customer data
router.put("/updatepropertybooking/:id", updatepropertybooking)

//delete booking data
router.delete("/deletepropertybooking/:id", deletepropertybooking)

export default router;