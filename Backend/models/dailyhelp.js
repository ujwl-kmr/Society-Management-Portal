const mongoose = require('mongoose');

const dailyHelpSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  flat_no: {
    type: Number,
    required: true
  },
  need: {
    type: String,
    required: true
  }
});

const DailyHelp = mongoose.model('DailyHelp', dailyHelpSchema);

module.exports = DailyHelp;

