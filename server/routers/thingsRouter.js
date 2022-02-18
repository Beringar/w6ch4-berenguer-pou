const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  res.status(200);
  res.json({ things });
});

module.exports = router;
