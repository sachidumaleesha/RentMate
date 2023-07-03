import ManageShowroom from "../../../models/Showroom/ManageShowroom.js";

// CREATE
export const createShowroom = async (req, res, next) => {
  // const newShowroom = new ManageShowroom(req.body);
  // try {
  //   const savedShowroom = await newShowroom.save();
  //   res.status(200).json(savedShowroom);
  // } catch (err) {
  //   next(err);
  // }

  const {name, email,contactNumber ,address ,city, openingTime,image1, image2, image3, userID} = req.body
  const newAdded = await ManageShowroom.create({name, email,contactNumber ,address ,city, openingTime,  image1, image2, image3, userID })

  if(newAdded){
    res.json(newAdded)
  }
  else{
    res.json({message: "something went wrong"})
  }

};

// UPDATE
export const updateShowroom = async (req, res, next) => {
  try {
    const updatedShowroom = await ManageShowroom.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      { new: true }
    );
    res.status(200).json(updatedShowroom);
  } catch (err) {
    next(err);
  }
};

// DELETE
// export const deleteShowroom = async (req, res, next) => {
//   try {
//     await ManageShowroom.findByIdAndDelete(req.params.id);
//     res.status(200).json("Showroom has been deleted...");
//   } catch (err) {
//     next(err);
//   }
// }

// GET
export const getShowroom = async (req, res, next) => {
  try {
    const Showroom = await ManageShowroom.findById(req.params.id);
    res.status(200).json(Showroom);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllShowroom = async (req, res, next) => {
  try {
    const Showroom = await ManageShowroom.find();
    res.status(200).json(Showroom);
  } catch (err) {
    next(err);
  }
}

//get showromm by userid
export const getShowroomByUserId = async (req, res, next) => {
  try {
    const Showroom = await ManageShowroom.find({ userID: req.params.id });
    res.status(200).json(Showroom);
  } catch (err) {
    next(err);
  }
}


//get random 4 showrooms
export const getRandomShowroom = async (req, res, next) => {
  try {
    const Showroom = await ManageShowroom.aggregate([{ $sample: { size: 4 } }]);
    res.status(200).json(Showroom);
  } catch (err) {
    next(err);
  }
}
