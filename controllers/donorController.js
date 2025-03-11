const Donor = require("../models/Donor");
const Blood = require("../models/Blood");

// Create Donation
exports.createDonation = async (req, res) => {
  const { bloodType, units, donationDate, expiryDate } = req.body;
  try {
    const donation = new Blood({ donorId: req.user.id, bloodType, units, donationDate, expiryDate });
    await donation.save();
    res.status(201).json({ message: "Donation created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Donation History
exports.getDonationHistory = async (req, res) => {
  try {
    const donations = await Blood.find({ donorId: req.user.id });
    res.json(donations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Check Eligibility
exports.checkEligibility = async (req, res) => {
  try {
    const donor = await Donor.findOne({ userId: req.user.id });
    const lastDonation = new Date(donor.lastDonationDate);
    const today = new Date();
    const diffTime = Math.abs(today - lastDonation);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const isEligible = diffDays >= 90; // 90 days gap required
    res.json({ isEligible });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};