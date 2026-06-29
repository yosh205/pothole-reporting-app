const authenticateToken = require("../middleware/authMiddleware");
const express = require("express");
const {
  getPotholes,
  getPothole,
  createPothole,
  likePothole,
  unlikePothole,
} = require("../controllers/potholeController");

const router = express.Router();

router.get("/", getPotholes);
router.get("/:id", getPothole);
router.post("/",authenticateToken, createPothole);
router.post("/:id/like", authenticateToken, likePothole)
router.delete("/:id/like", authenticateToken, unlikePothole);

module.exports = router;