import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import TurkeyMap from "../pages/TurkeyMap";
import TurkeyProvince from "../pages/TurkeyProvince";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="turkeymap" element={<TurkeyMap />} />
        <Route path="turkeyprovince" element={<TurkeyProvince />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
