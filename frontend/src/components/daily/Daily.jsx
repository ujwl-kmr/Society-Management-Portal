import React, { useState } from 'react';
import axios from 'axios';
import '../daily/Daily.css';
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import Usernav from '../navbar/Usernav';
import Footer from '../footer/Footer';

export default function Daily() {
  const [formData, setFormData] = useState({
    username: '',
    flat_no: '',
    need: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!areAllFieldsFilled()) {
      toast.error("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/dailyhelp/", formData);

      if (response.status === 201) {
        console.log('Form submitted successfully!');
        toast.success("Complaint submitted successfully!");
        // Clear form data
        setFormData({
          username: '',
          flat_no: '',
          need: ''
        })
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const areAllFieldsFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };
  

  return (
    <>
      <Usernav />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mainContainer">
          <div className="main">
            <h1>DAILY NEEDS</h1>
            <div className="resident">
              <label htmlFor="username">Resident</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder='Enter your Name'
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="flatNO">
              <label htmlFor="flat_no">FlatNo</label>
              <input
                type="number"
                name="flat_no"
                id="flat_no"
                placeholder='Enter your Flat number'
                value={formData.flat_no}
                onChange={handleChange}
              />
            </div>
            <div className="need">
              <label htmlFor="need">Need</label>
              <input
                type="text"
                name="need"
                id="need"
                placeholder='Enter your need'
                value={formData.need}
                onChange={handleChange}
              />
            </div>
            <button type="submit">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </form>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
