import React from "react";
import Home from "../src/components/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminlogin from "../src/components/admin/Admin"
import Dailyhelp from "../src/components/daily/Daily"
import Complaints from "../src/components/complaint/Complaint"
import Display from "../src/components/display/Display"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Adminlogin" element={<Adminlogin/>} />
        <Route path="/Dailyhelp" element={<Dailyhelp />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/display" element={<Display />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
