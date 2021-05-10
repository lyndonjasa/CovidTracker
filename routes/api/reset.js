const express = require("express");
const router = express.Router();

const SocialInteraction = require("../../models/SocialInteraction");
const VisitedPlace = require("../../models/VisitedPlace");

// @route   POST api/reset
// @desc    POST removes all data from the database
router.post("/", async (req, res) => {
  try {
    await SocialInteraction.deleteMany();
    await VisitedPlace.deleteMany();

    res.status(200).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;