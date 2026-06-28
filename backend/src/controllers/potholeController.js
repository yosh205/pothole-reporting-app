const Pothole = require("../models/potholeModel");

async function getPotholes(req, res) {
  try {
    const potholes = await Pothole.getAllPotholes();
    res.json(potholes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

async function createPothole(req, res) {
  try {
    const { latitude, longitude, description, image_url } = req.body;

    const pothole = await Pothole.createPothole(
      latitude,
      longitude,
      description,
      image_url
    );

    res.status(201).json(pothole);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

async function likePothole(req, res) {
  try {
    const potholeId = req.params.id;
    const { user_id } = req.body;

    const like = await Pothole.likePothole(potholeId, user_id);

    res.status(201).json(like);
  } catch (err) {
    console.error(err);

    if (err.code === "23505") {
      return res.status(400).json({ error: "User already liked this pothole" });
    }

    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getPotholes,
  createPothole,
  likePothole,
};