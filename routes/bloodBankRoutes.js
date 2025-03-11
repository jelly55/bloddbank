const express = require("express");
const bloodBankController = require("../controllers/bloodBankController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/inventory", authMiddleware, bloodBankController.viewInventory);
router.post("/inventory", authMiddleware, bloodBankController.addInventory);
router.get("/requests", authMiddleware, bloodBankController.viewAllRequests);
router.patch("/requests/:id", authMiddleware, bloodBankController.processRequest);

module.exports = router;