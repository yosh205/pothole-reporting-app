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

async function createPothole(userId, latitude, longitude, description, image_url) {
  const result = await pool.query(
    `
    INSERT INTO potholes (user_id, latitude, longitude, description, image_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [userId, latitude, longitude, description, image_url]
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

async function getPotholeById(id) {
  const result = await pool.query(
    `
    SELECT
      p.id,
      p.user_id,
      p.latitude,
      p.longitude,
      p.description,
      p.image_url,
      p.created_at,
      COUNT(l.id) AS likes
    FROM potholes p
    LEFT JOIN pothole_likes l ON p.id = l.pothole_id
    WHERE p.id = $1
    GROUP BY p.id;
    `,
    [id]
  );

  return result.rows[0];
}

async function unlikePothole(potholeId, userId) {
  const result = await pool.query(
    `
    DELETE FROM pothole_likes
    WHERE pothole_id = $1 AND user_id = $2
    RETURNING *;
    `,
    [potholeId, userId]
  );

  return result.rows[0];
}

module.exports = {
  getAllPotholes,
  getPotholeById,
  createPothole,
  likePothole,
  unlikePothole,
};