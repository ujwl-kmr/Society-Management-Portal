const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const adminRoute = require('./routes/adminRoute');
const complaintRoute = require('./routes/complaintRoute');
const dailyRoute = require('./routes/dailyRoute');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

connectDB(); // Connect to the database

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount API routes
app.use('/admin', adminRoute);
app.use('/complaint', complaintRoute);
app.use('/dailyhelp', dailyRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
