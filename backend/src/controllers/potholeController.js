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
    const { latitude, longitude, description } = req.body;
    const userId = req.user.id;

    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const pothole = await Pothole.createPothole(
      userId,
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
    const userId = req.user.id;

    const like = await Pothole.likePothole(potholeId, userId);

    res.status(201).json(like);
  } catch (err) {
    console.error(err);

    if (err.code === "23505") {
      return res.status(400).json({ error: "User already liked this pothole" });
    }

    res.status(500).json({ error: "Server error" });
  }
}

async function getPothole(req, res) {
  try {
    const potholeId = req.params.id;

    const pothole = await Pothole.getPotholeById(potholeId);

    if (!pothole) {
      return res.status(404).json({ error: "Pothole not found" });
    }

    res.json(pothole);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

async function unlikePothole(req, res) {
  try {
    const potholeId = req.params.id;
    const userId = req.user.id;

    const unlike = await Pothole.unlikePothole(potholeId, userId);

    if (!unlike) {
      return res.status(404).json({ error: "Like not found" });
    }

    res.json({ message: "Pothole unliked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getPotholes,
  getPothole,
  createPothole,
  likePothole,
  unlikePothole,
};