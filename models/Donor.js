const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodType: { type: String, required: true },
  lastDonationDate: { type: Date },
  donationCount: { type: Number, default: 0 },
  healthStatus: { type: String, default: "Healthy" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donor", donorSchema);