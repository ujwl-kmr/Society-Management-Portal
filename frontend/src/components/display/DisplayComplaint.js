import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayComplaint.css'; // Import the CSS file

const DisplayComplaint = ({ complaintData }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints(complaintData);
  }, [complaintData]);

  const handleDelete = async (complaintId) => {
    try {
      console.log(complaintId);
      await axios.delete(`http://localhost:3001/complaint/${complaintId}`);
      // Update the complaintData state to remove the deleted complaint
      setComplaints((prevData) => prevData.filter((complaint) => complaint._id !== complaintId));
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  return (
    <div>
      <h2>Complaint Data Display</h2>
      <table className="complaint-table"> {/* Apply the complaint-table class */}
        <thead>
          <tr>
            <th>Resident</th>
            <th>Flat Number</th>
            <th>Phone Number</th>
            <th>Complaint</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.username}</td>
              <td>{complaint.flat_no}</td>
              <td>{complaint.phoneno}</td>
              <td>{complaint.complaintType}</td>
              <td>
                {/* Apply the delete-button class */}
                <button className="delete-button" onClick={() => handleDelete(complaint._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayComplaint;
