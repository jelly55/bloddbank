const Blood = require("../models/Blood");

// Create Blood Request
exports.createRequest = async (req, res) => {
  const { bloodType, units, diagnosis, hospitalName, emergencyContact } = req.body;
  try {
    const request = new Blood({
      recipientId: req.user.id,
      bloodType,
      units,
      status: "requested",
      diagnosis,
      hospitalName,
      emergencyContact,
    });
    await request.save();
    res.status(201).json({ message: "Blood request created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Request History
exports.getRequestHistory = async (req, res) => {
  try {
    const requests = await Blood.find({ recipientId: req.user.id });
    res.json(requests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Request
exports.updateRequest = async (req, res) => {
  try {
    const request = await Blood.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};