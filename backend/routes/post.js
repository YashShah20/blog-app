const express = require("express");

const {
  getPosts,
  getPostById,
  addPost,
  likePost,
  deletePost,
} = require("../controllers/post");

const router = express.Router();

router.get("", getPosts);
router.get("/:id", getPostById);
router.post("/", addPost);
router.put("/:id", likePost);
router.delete("/:id", deletePost);

module.exports = router;
