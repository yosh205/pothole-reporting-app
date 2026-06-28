const authenticateToken = require("../middleware/authMiddleware");
const express = require("express");
const {
  getPotholes,
  createPothole,
  likePothole,
} = require("../controllers/potholeController");

const router = express.Router();

router.get("/", getPotholes);
router.post("/",authenticateToken, createPothole);
router.post("/:id/like", authenticateToken, likePothole)

module.exports = router;