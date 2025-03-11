const mongoose = require("mongoose");

const bloodSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "Donor" },
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipient" },
  bloodType: { type: String, required: true },
  units: { type: Number, required: true },
  status: { type: String, enum: ["available", "requested", "allocated"], default: "available" },
  donationDate: { type: Date }, // Make this optional
  expiryDate: { type: Date }, // Make this optional
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blood", bloodSchema);