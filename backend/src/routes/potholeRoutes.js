const authenticateToken = require("../middleware/authMiddleware");
const express = require("express");
const upload = require("../middleware/uploadMiddleware");
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
router.post("/",authenticateToken, upload.single("image"), createPothole);
router.post("/:id/like", authenticateToken, likePothole)
router.delete("/:id/like", authenticateToken, unlikePothole);

module.exports = router;