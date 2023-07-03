// import ManageVehicle from "../../models/Vehicle/ManageVehicle.js";

// // CREATE
// export const createVehicle = async (req, res, next) => {
//   // const newVehicle = new ManageVehicle(req.body);
//   // try {
//   //   const savedVehicle = await newVehicle.save();
//   //   res.status(200).json(savedVehicle);
//   // } catch (err) {
//   //   next(err);
//   // }
//   const {name,email,contact,date,status,image} = req.body
//   const newAdded = await ManageVehicle.create({name,email,contact,date,status,image })

//   if(newAdded){
//     res.json(newAdded)
//   }
//   else{
//     res.json({message: "something went wrong"})
//   }
// };

// // UPDATE
// export const updateVehicle = async (req, res, next) => {
//   try {
//     const updateVehicle = await ManageVehicle.findByIdAndUpdate(
//       req.params.id,
//       {$set: req.body},
//       { new: true }
//     );
//     res.status(200).json(updateVehicle);
//   } catch (err) {
//     next(err);
//   }
// };

// // DELETE
// export const deleteVehicle = async (req, res, next) => {
//   try {
//     await ManageVehicle.findByIdAndDelete(req.params.id);
//     res.status(200).json("Vehicle has been deleted...");
//   } catch (err) {
//     next(err);
//   }
// }

// // GET
// export const getVehicle = async (req, res, next) => {
//   try {
//     const vehicle = await ManageVehicle.findById(req.params.id);
//     res.status(200).json(vehicle);
//   } catch (err) {
//     next(err);
//   }
// };

// // GET ALL
// export const getAllVehicle = async (req, res, next) => {
//   try {
//     const vehicles = await ManageVehicle.find();
//     res.status(200).json(vehicles);
//   } catch (err) {
//     next(err);
//   }
// }
import ManageVehicle from "../../models/Vehicle/ManageVehicle.js";

// CREATE
export const createVehicle = async (req, res, next) => {
  // const newVehicle = new ManageVehicle(req.body);
  // try {
  //   const savedVehicle = await newVehicle.save();
  //   res.status(200).json(savedVehicle);
  // } catch (err) {
  //   next(err);
  // }
  const { name, email, contact, date, status, image, description, userID, price } = req.body
  const newAdded = await ManageVehicle.create({ name, email, contact, date, status, image, description, userID, price })

  if (newAdded) {
    res.json(newAdded)
  }
  else {
    res.json({ message: "something went wrong" })
  }
};

// UPDATE
export const updateVehicle = async (req, res, next) => {
  try {
    const updateVehicle = await ManageVehicle.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateVehicle);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteVehicle = async (req, res, next) => {
  try {
    await ManageVehicle.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicle has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getVehicle = async (req, res, next) => {
  try {
    const vehicle = await ManageVehicle.findById(req.params.id);
    res.status(200).json(vehicle);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllVehicle = async (req, res, next) => {
  try {
    const vehicles = await ManageVehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
}

//get vehicles by user ID
export const getVehicleByUserID = async (req, res, next) => {
  try {
    const vehicles = await ManageVehicle.find({ userID: req.params.id });
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
}

//get vehicles by status is Active
export const getVehicleByStatus = async (req, res, next) => {
  try {
    const vehicles = await ManageVehicle.find({ status: "Active" });
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
}

//get random 8 vehicles
export const getVehicleByRandom = async (req, res, next) => {
  try {
    const vehicles = await ManageVehicle.aggregate([{ $sample: { size: 4 } }]);
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
}
