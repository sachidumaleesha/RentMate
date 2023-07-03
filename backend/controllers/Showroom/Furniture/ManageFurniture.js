import ManageFurniture from "../../../models/Showroom/ManageFurniture.js";

// CREATE
export const createFurniture = async (req, res, next) => {
  // const newFurniture = new ManageFurniture(req.body);
  // try {
  //   const savedFurniture = await newFurniture.save();
  //   res.status(200).json(savedFurniture);
  // } catch (err) {
  //   next(err);
  const {name, price,quantity,Category,images,showroomID} = req.body
  const newAdded = await ManageFurniture.create({name, price,quantity,Category, images, showroomID })

  if(newAdded){
    res.json(newAdded)
  }
  else{
    res.json({message: "something went wrong"})
  }
  
};

// UPDATE
export const updateFurniture = async (req, res, next) => {
  try {
    const updatedFurniture = await ManageFurniture.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      { new: true }
    );
    res.status(200).json(updatedFurniture);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteFurniture = async (req, res, next) => {
  try {
    await ManageFurniture.findByIdAndDelete(req.params.id);
    res.status(200).json("Furniture has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getFurniture = async (req, res, next) => {
  try {
    const Furniture = await ManageFurniture.findById(req.params.id);
    res.status(200).json(Furniture);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllFurniture = async (req, res, next) => {
  try {
    const Furniture = await ManageFurniture.find();
    res.status(200).json(Furniture);
  } catch (err) {
    next(err);
  }
}

//get furniture by category and showroom id
export const getFurnitureByCategoryandShowroomID = async (req, res, next) => {
  try {
    const Furniture = await ManageFurniture.find({ Category: req.params.category, showroomID: req.params.showroomID });
    res.status(200).json(Furniture);
  } catch (err) {
    next(err);
  }
}

//get furniture by showroom id
export const getFurnitureByShowroomID = async (req, res, next) => {
  try {
    const Furniture = await ManageFurniture.find({ showroomID: req.params.id });
    res.status(200).json(Furniture);
  } catch (err) {
    next(err);
  }
}
