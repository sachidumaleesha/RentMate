import Booking from "../../models/Booking/Booking.js";


export const createbooking = async (req, res, next) => {

  const {
    deliveryLocation,
    deliveryDate,
    returnLocation,
    distance,
    amount,
    vehicleID,
    customerID,
    vehicleOwner
  } = req.body

  const newAdded = await Booking.create({
    deliveryLocation,
    deliveryDate,
    returnLocation,
    distance,
    amount,
    vehicleID,
    customerID,
    vehicleOwner
  })

  if (newAdded) {
    res.json(newAdded)
  }
  else {
    res.json({ message: "something went wrong" })
  }
};

// UPDATE
export const updatebooking = async (req, res, next) => {
  try {
    const updatebooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatebooking);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deletebooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicle has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getbooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllbooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
}

//get vehicles by owner ID
export const getbookingByOwnerID = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ vehicleOwner: req.params.id });
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
}