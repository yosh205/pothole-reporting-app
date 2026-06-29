const pool = require("../db");

async function getCommentsByPotholeId(potholeId) {
  const result = await pool.query(
    `
    SELECT
      c.id,
      c.pothole_id,
      c.user_id,
      u.username,
      c.comment,
      c.created_at
    FROM comments c
    JOIN users u ON c.user_id = u.id
    WHERE c.pothole_id = $1
    ORDER BY c.created_at DESC;
    `,
    [potholeId]
  );

  return result.rows;
}

async function createComment(potholeId, userId, comment) {
  const result = await pool.query(
    `
    INSERT INTO comments (pothole_id, user_id, comment)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [potholeId, userId, comment]
  );

  return result.rows[0];
}

module.exports = {
  getCommentsByPotholeId,
  createComment,
};