import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardClient from "../pages/DashboardClient";
import DashboardProvider from "../pages/DashboardProvider";
import ServiceDetails from "../pages/ServiceDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-dashboard" element={<DashboardClient />} />
        <Route path="/provider-dashboard" element={<DashboardProvider />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
