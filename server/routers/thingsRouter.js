const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const things = await Thing.find();
    res.status(200);
    res.json({ things });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const thingId = req.params.id;
    const thing = await Thing.findById(thingId);
    res.json(thing);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const thingId = req.params.id;
    await Thing.findByIdAndDelete(thingId);
    res.status(200);
    res.json({});
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const thingToPost = await Thing.create(req.body);
    res.json(thingToPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
