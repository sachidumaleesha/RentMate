import express from "express";
import {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog,
    getAllblogs


 } from "../../controllers/Blog/blog.js";
 const router = express.Router();

// Call CREATE Function
router.post("/", createBlog);

// Call UPDATE Function
router.put("/:id", updateBlog);

// Call DELETE Function
router.delete("/:id", deleteBlog);

// call GET Function
router.get("/:id", getBlog);

// Call GET ALL Function
router.get("/", getAllblogs);

export default router;
