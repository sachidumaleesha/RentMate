import Revenue from "../../models/Revenue/Revenue.js";


export const createrevenue = async (req, res, next) => {

  const {name,vin,date,contact,price} = req.body
  const newAdded = await Revenue.create({name,vin,date,contact,price })

  if(newAdded){
    res.json(newAdded)
  }
  else{
    res.json({message: "something went wrong"})
  }
};

// UPDATE
export const updaterevenue = async (req, res, next) => {
  try {
    const updaterevenue = await Revenue.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      { new: true }
    );
    res.status(200).json(updaterevenue);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleterevenue = async (req, res, next) => {
  try {
    await Revenue.findByIdAndDelete(req.params.id);
    res.status(200).json("Price has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getrevenue = async (req, res, next) => {
  try {
    const revenue = await Revenue.findById(req.params.id);
    res.status(200).json(revenue);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllrevenue = async (req, res, next) => {
  try {
    const revenues = await Revenue.find();
    res.status(200).json(revenues);
  } catch (err) {
    next(err);
  }
}