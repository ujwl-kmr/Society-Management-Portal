const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  flat_no: {
    type: Number,
    required: true
  },
  phoneno: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  complaintType: {
    type: String,
    required: true
  }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;

