const express = require("express");
const {
  getCommentsByPostId,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");

const router = express.Router();

router.get("/:post_id", getCommentsByPostId);
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
