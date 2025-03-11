const express = require("express");
const recipientController = require("../controllers/recipientController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Create Blood Request (POST)
router.post("/requests", authMiddleware, (req, res, next) => {
  if (req.user.role === "recipient" || req.user.role === "staff") {
    next(); // Allow access
  } else {
    res.status(403).json({ error: "Access denied. Only recipients and staff can create blood requests." });
  }
}, recipientController.createRequest);

// Get Request History (GET)
router.get("/requests", authMiddleware, recipientController.getRequestHistory);

// Update Request (PATCH)
router.patch("/requests/:id", authMiddleware, recipientController.updateRequest);

module.exports = router;