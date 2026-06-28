const pool = require("../db");

async function getAllPotholes() {
  const result = await pool.query(`
    SELECT
      p.id,
      p.latitude,
      p.longitude,
      p.description,
      p.image_url,
      p.created_at,
      COUNT(l.id) AS likes
    FROM potholes p
    LEFT JOIN pothole_likes l ON p.id = l.pothole_id
    GROUP BY p.id
    ORDER BY p.created_at DESC;
  `);

  return result.rows;
}

async function createPothole(latitude, longitude, description, image_url) {
  const result = await pool.query(
    `
    INSERT INTO potholes (latitude, longitude, description, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
    [latitude, longitude, description, image_url]
  );

  return result.rows[0];
}

async function likePothole(potholeId, userId) {
  const result = await pool.query(
    `
    INSERT INTO pothole_likes (pothole_id, user_id)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [potholeId, userId]
  );

  return result.rows[0];
}

module.exports = {
  getAllPotholes,
  createPothole,
  likePothole,
};