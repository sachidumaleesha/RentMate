import ManageProblems from "../../../models/SupportCenter/Problems/ManageProblems.js";

// CREATE
export const createProblems = async (req, res, next) => {
  // const newProblems = new ManageProblems(req.body);
  // try {
  //   const savedProblem= await newProblems.save();
  //   res.status(200).json(savedProblem);
  // } catch (err) {
  //   next(err);
  // }

  const {name,email,contactNumber,date, problemtype,problem,status , userID} = req.body
  const newProblems = await ManageProblems.create({name,email,contactNumber,date, problemtype,problem,status,userID})

  if(newProblems){
    res.json(newProblems)
  }
  else{
    res.json({message: "something went wrong"})
  }
};


//UPDATE
export const updateProblems = async (req, res, next) => {
  try {
    const updatedListing = await ManageProblems.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      { new: true }
    );
    res.status(200).json(updatedProblems);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteProblems = async (req, res, next) => {
  try {
    await ManageProblems.findByIdAndDelete(req.params.id);
    res.status(200).json("Problem has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getProblems = async (req, res, next) => {
  try {
    const problems = await ManageProblems.findById(req.params.id);
    res.status(200).json(problems);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllProblems = async (req, res, next) => {
  try {
    const problems = await ManageProblems.find({});
    res.status(200).json(problems);
  } catch (err) {
    next(err);
  }
}

//get by user ID
export const getProblemsByUserID = async (req, res, next) => {
  try {
    const problems = await ManageProblems.find({ userID: req.params.id });
    res.status(200).json(problems);
  } catch (err) {
    next(err);
  }
}
