import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "../complaint/Complaint.css";
import Usernav from "../navbar/Usernav";
import Footer from "../footer/Footer";

export default function Complaint() {
  const [formData, setFormData] = useState({
    username: "",
    flat_no: "",
    phoneno: "",
    email: "",
    complaintType: ""
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
      const response = await axios.post("http://localhost:3001/complaint/", formData);

      if (response.status === 201) {
        console.log("Form submitted successfully!");
        toast.success("Complaint submitted successfully!");
        // Clear form data
        setFormData({
          username: "",
          flat_no: "",
          phoneno: "",
          email: "",
          complaintType: ""
        })
        const radioButtons = document.querySelectorAll('input[name="complaintType"]');
      radioButtons.forEach(button => {
        button.checked = false;
      });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const areAllFieldsFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <>
      <Usernav />
      <form autoComplete="off" onSubmit={handleSubmit} className="form">
        <div className="mainForm">
          <h1>COMPLAINT FORM</h1>
          <div className="username">
            <label htmlFor="username">Resident</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flat-no">
            <label htmlFor="flat_no">Flat Number</label>
            <input
              type="number"
              name="flat_no"
              id="flat_no"
              placeholder="Enter your flat no"
              value={formData.flat_no}
              onChange={handleChange}
            />
          </div>
          <div className="phone-no">
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              placeholder="Enter your phone no"
              value={formData.phoneno}
              onChange={handleChange}
            />
          </div>
          <div className="email-">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
        <div className="complaint">
          <h3>Choose your complaint</h3>
          <label>
            Plumbing Issue
            <input
              type="radio"
              name="complaintType"
              value="Plumbing"
              onChange={handleChange}
            />
          </label>
          <label>
            Carpenter Issue
            <input
              type="radio"
              name="complaintType"
              value="Carpenter"
              onChange={handleChange}
            />
          </label>
          <label>
            Electricity Issue
            <input
              type="radio"
              name="complaintType"
              value="Electricity"
              onChange={handleChange}
            />
          </label>
          <label>
            Pest Issue
            <input
              type="radio"
              name="complaintType"
              value="Pest"
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
