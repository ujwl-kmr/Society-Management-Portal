import React, { useEffect, useState } from 'react';
import Adminnav from '../navbar/Adminnav';
import Footer from '../footer/Footer';
import DisplayDaily from './DisplayDaily';
import DisplayComplaint from './DisplayComplaint';
import axios from 'axios'; // Import Axios
import '../display/Display.css';

const DisplayPage = () => {
  const [dailyData, setDailyData] = useState([]);
  const [complaintData, setComplaintData] = useState([]);

  useEffect(() => {
    const fetchDailyData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/dailyhelp/"); // Use axios.get to fetch data
        setDailyData(response.data); // Extract the data from the response
      } catch (error) {
        console.error('Error fetching daily data:', error);
      }
    };

    const fetchComplaintData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/complaint/"); // Use axios.get to fetch data
        setComplaintData(response.data); // Extract the data from the response
      } catch (error) {
        console.error('Error fetching complaint data:', error);
      }
    };

    fetchDailyData();
    fetchComplaintData();
  }, []);

  return (
    <>
      <Adminnav />
      <div className="loading"></div>
      <div className="complaintDisplay">
        <DisplayDaily dailyData={dailyData} />
        <DisplayComplaint complaintData={complaintData} />
      </div>
      <Footer />
    </>
  );
};

export default DisplayPage;

