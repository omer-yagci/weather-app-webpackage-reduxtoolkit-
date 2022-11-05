import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import TurkeyMaps from "../pages/TurkeyMaps";
import TurkeyProvinces from "../pages/TurkeyProvinces";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="turkeymaps" element={<TurkeyMaps />} />
        <Route path="turkeyprovinces" element={<TurkeyProvinces />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
