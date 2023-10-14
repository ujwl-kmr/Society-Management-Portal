import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayDaily.css'; // Import the CSS file

const DisplayDaily = ({ dailyData }) => {
  const [dailyHelps, setDailyHelps] = useState([]);

  useEffect(() => {
    setDailyHelps(dailyData);
  }, [dailyData]);

  const handleDelete = async (dailyHelpId) => {
    try {
      await axios.delete(`http://localhost:3001/dailyhelp/${dailyHelpId}`);
      // Update the dailyData state to remove the deleted daily help
      setDailyHelps((prevData) => prevData.filter((daily) => daily._id !== dailyHelpId));
    } catch (error) {
      console.error('Error deleting daily help:', error);
    }
  };

  return (
    <div>
      <h2>Daily Data Display</h2>
      <table className="daily-table"> {/* Apply the daily-table class */}
        <thead>
          <tr>
            <th>Resident</th>
            <th>Flat Number</th>
            <th>Daily Needs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dailyHelps.map((daily) => (
            <tr key={daily._id}>
              <td>{daily.username}</td>
              <td>{daily.flat_no}</td>
              <td>{daily.need}</td>
              <td>
                {/* Apply the delete-button class */}
                <button className="delete-button" onClick={() => handleDelete(daily._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayDaily;
