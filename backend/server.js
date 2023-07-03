import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import customerRouter from "./routes/Customer/customer.js";
import manageListingRouter from "./routes/LandLord/Listings/ManageListings.js";
import authRouter from "./routes/Auth/auth.js";
import cookiePaser from "cookie-parser";
import blogRouter from "./routes/Blog/blog.js";
import problemsRouter from "./routes/SupportCenter/Problems/ManageProblems.js";
import lawyerRouter from "./routes/Lawyer/lawyer.js";
import managefurnitureRouter from "./routes/Showroom/Furniture/ManageFurniture.js"
import manageshowroomRouter from "./routes/Showroom/Create_Showroom/ManageShowroom.js"
import userRouter from "./routes/Usermanage/UserList.js"
import manageVehicleRouter from "./routes/Vehicle/ManageVehicle.js";
import bookingRouter from "./routes/Booking/Booking.js";
import cardRouter from "./routes/Payment/Cards.js";
import cardDetailsRouter from "./routes/Payment/Cards.js";
import reservationDetailRouter from "./routes/Payment/Reservations.js";


const app = express();
app.use(cors())
dotenv.config();
const PORT = process.env.PORT || 7070;
app.use(bodyParser.json());

const URL = process.env.MONGODB;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

mongoose.connection.on("disconected", () => {
  console.log("mongodb disconected!");
});

//middlewares
app.use(cookiePaser());
app.use(express.json());

// const cardRouter = require("./routes/Payment/Cards.js")
app.use("/card", cardDetailsRouter);
app.use("/reservation", reservationDetailRouter);

app.use("/api/customer", customerRouter);
app.use("/api/manageListings", manageListingRouter);
app.use("/api/Furniture", managefurnitureRouter);
app.use("/api/Showroom", manageshowroomRouter);
app.use("/api/landlordinfo", manageListingRouter);
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);
//supportCenter
app.use("/api/problems", problemsRouter);
//lawyer
app.use("/api/lawyer",lawyerRouter);
app.use("/api/userr", userRouter);
app.use("/api/vehi",manageVehicleRouter);
app.use("/api/bookingVehicle",bookingRouter);

// Error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log("Connect to Backend");
  console.log("server is running on port: " + PORT);
});
