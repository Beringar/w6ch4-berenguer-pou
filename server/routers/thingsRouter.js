const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ things: "plenty of things , boy!" });
});

module.exports = router;
