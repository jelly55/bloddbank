const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // Import the middleware
const router = express.Router();

// Public routes (no authentication required)
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes (authentication required)
router.get("/profile", authMiddleware, authController.getProfile); // Add middleware
router.patch("/profile", authMiddleware, authController.updateProfile); // Add middleware

module.exports = router;