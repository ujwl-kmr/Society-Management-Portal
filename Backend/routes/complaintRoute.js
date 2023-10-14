const express = require('express');
const router = express.Router();
const complaintController = require('../controller/complaintController');

// Route to store a complaint
router.post('/', complaintController.storeComplaint);

// Route to retrieve complaint data
router.get('/', complaintController.getComplaint);

router.delete('/:id', complaintController.deleteComplaintById);

module.exports = router;
