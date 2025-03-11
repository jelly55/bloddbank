const express = require("express");
const donorController = require("../controllers/donorController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/donations", authMiddleware, donorController.createDonation);
router.get("/donations", authMiddleware, donorController.getDonationHistory);
router.get("/eligibility", authMiddleware, donorController.checkEligibility);

module.exports = router;