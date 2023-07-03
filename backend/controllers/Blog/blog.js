import blog from "../../models/Blog/blog.js";

// CREATE
export const createBlog = async (req, res, next) => {
  const newblog = new blog(req.body);
  try {
    const savedblog = await newblog.save();
    res.status(200).json(savedblog);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateBlog = async (req, res, next) => {
  try {
    const updatedblog = await blog.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      { new: true }
    );
    res.status(200).json(updatedblog);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteBlog = async (req, res, next) => {
  try {
    await blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog has been deleted...");
  } catch (err) {
    next(err);
  }
}

// GET
export const getBlog = async (req, res, next) => {
  try {
    const bloging = await blog.findById(req.params.id);
    res.status(200).json(bloging);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllblogs = async (req, res, next) => {
  try {
    const bloging = await blog.find();
    res.status(200).json(bloging);
  } catch (err) {
    next(err);
  }
}