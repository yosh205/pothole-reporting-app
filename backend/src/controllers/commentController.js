const Comment = require("../models/commentModel");

async function getComments(req, res) {
  try {
    const potholeId = req.params.id;

    const comments = await Comment.getCommentsByPotholeId(potholeId);

    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

async function createComment(req, res) {
  try {
    const potholeId = req.params.id;
    const userId = req.user.id;
    const { comment } = req.body;

    const newComment = await Comment.createComment(potholeId, userId, comment);

    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getComments,
  createComment,
};