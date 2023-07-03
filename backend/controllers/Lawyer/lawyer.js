import lawyers from "../../models/Lawyer/lawyer.js";

// CREATE
export const createLawyer = async (req, res, next) => {
  const newLawyer = new lawyers(req.body);
  try {
    const savedLawyer = await newLawyer.save();
    res.status(200).json(savedLawyer);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateLawyer = async (req, res, next) => {
  try {
    const updatedLawyer = await lawyers.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedLawyer);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteLawyer = async (req, res, next) => {
  try {
    await lawyers.findByIdAndDelete(req.params.id);
    res.status(200).json("Problem has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getLawyer = async (req, res, next) => {
  try {
    const lawyer = await lawyers.findById(req.params.id);
    res.status(200).json(lawyer);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllLawyer = async (req, res, next) => {
  try {
    const lawyer = await lawyers.find({});
    res.status(200).json(lawyer);
  } catch (err) {
    next(err);
  }
}

//get lawyer by userid
export const getLawyerByUserId = async (req, res, next) => {
  try {
    const lawyer = await lawyers.find({ userID: req.params.id });
    res.status(200).json(lawyer);
  } catch (err) {
    next(err);
  }
}

// get random 4 lawyers
export const getLawyerRandom = async (req, res, next) => {
  try {
    const lawyer = await lawyers.aggregate([{ $sample: { size: 4 } }]);
    res.status(200).json(lawyer);
  } catch (err) {
    next(err);
  }
}