const express = require("express");
const {
  getPotholes,
  createPothole,
  likePothole,
} = require("../controllers/potholeController");

const router = express.Router();

router.get("/", getPotholes);
router.post("/", createPothole);
router.post("/:id/like", likePothole)

module.exports = router;