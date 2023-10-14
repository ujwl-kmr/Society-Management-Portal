const DailyHelp = require('../models/dailyhelp'); // Assuming you have a Mongoose model for DailyHelp

// Controller to store daily help data
const storeDailyHelp = async (req, res) => {
  try {
    const { username, flat_no, need } = req.body;

    // Create a new DailyHelp document
    const dailyHelp = new DailyHelp({
      username,
      flat_no,
      need
    });

    // Save the daily help data to MongoDB
    await dailyHelp.save();

    res.status(201).json({ message: 'Daily help data stored successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to retrieve daily help data
const getDailyHelp = async (req, res) => {
  try {
    // Fetch all daily help data from MongoDB
    const dailyHelpData = await DailyHelp.find();

    res.status(200).json(dailyHelpData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteDailyById = async (req, res) => {
  const dailyHelpId = req.params.id;

  try {
    const deleteddailyHelp = await DailyHelp.findByIdAndDelete(dailyHelpId);

    if (!deleteddailyHelp) {
      return res.status(404).json({ error: 'Daily help not found' });
    }

    res.status(200).json({ message: 'Daily help deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  storeDailyHelp,
  getDailyHelp,
  deleteDailyById
};
