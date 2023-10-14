const express = require('express');
const router = express.Router();
const dailyHelpController = require('../controller/dailyController');

// Route to store daily help data
router.post('/', dailyHelpController.storeDailyHelp);

// Route to retrieve daily help data
router.get('/', dailyHelpController.getDailyHelp);

router.delete('/:id', dailyHelpController.deleteDailyById);

module.exports = router;
