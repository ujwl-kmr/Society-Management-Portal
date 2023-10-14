const Complaint = require('../models/complaint');

// Controller to store a complaint
const storeComplaint = async (req, res) => {
  try {
    const { username, flat_no, phoneno, email, complaintType } = req.body;

    const complaint = new Complaint({
      username,
      flat_no,
      phoneno,
      email,
      complaintType
    });

    await complaint.save();

    res.status(201).json({ message: 'Complaint data stored successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to retrieve complaint data
const getComplaint = async (req, res) => {
  try {
    const complaintData = await Complaint.find();
    res.status(200).json(complaintData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteComplaintById = async (req, res) => {
  const complaintId = req.params.id;

  try {
    const deletedComplaint = await Complaint.findByIdAndDelete(complaintId);

    if (!deletedComplaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }

    res.status(200).json({ message: 'Complaint deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  storeComplaint,
  getComplaint,
  deleteComplaintById
};
