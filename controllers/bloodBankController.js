const Blood = require("../models/Blood");

// View Inventory
exports.viewInventory = async (req, res) => {
  try {
    const inventory = await Blood.find({ status: "available" });
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add Inventory
exports.addInventory = async (req, res) => {
  const { bloodType, units, donationDate, expiryDate } = req.body;
  try {
    const blood = new Blood({ bloodType, units, donationDate, expiryDate });
    await blood.save();
    res.status(201).json({ message: "Blood added to inventory" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// View All Requests
exports.viewAllRequests = async (req, res) => {
  try {
    const requests = await Blood.find({ status: "requested" });
    res.json(requests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Process Request
exports.processRequest = async (req, res) => {
  try {
    const request = await Blood.findByIdAndUpdate(req.params.id, { status: "allocated" }, { new: true });
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};