const express = require("express");
const {
  getComments,
  createComment,
} = require("../controllers/commentController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id/comments", getComments);
router.post("/:id/comments", authenticateToken, createComment);

module.exports = router;