const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

// Blog routes
router.get("/", blogController.blog_index);

// get all data blogs
router.get("/all-blogs", blogController.blog_detail);

// render to page create blog post
router.get("/create", blogController.blog_create_get);

// get single blog
router.get("/:id", blogController.get_single_blog);

// POST blog
router.post("/post-blog", blogController.blog_create_post);

// DELETE blog
router.delete("/delete/:id", blogController.blog_delete_post);

module.exports = router;
