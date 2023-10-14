const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://ujwlkmr13:${process.env.ATLAS}@ujjawalk.psxgedu.mongodb.net/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
