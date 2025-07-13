import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ForFarmers from './ForFarmers';
import BulkOrders from './BulkOrders';
import PaddyListings from './PaddyListings';
import BrowsePaddy from './BrowsePaddy';
import ContactFarmer from './ContactFarmer';
import FarmerCrops from './FarmerCrops';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ForFarmers" element={<ForFarmers />} />
        <Route path="/BulkOrders" element={<BulkOrders />} />
        <Route path="/PaddyListings" element={<PaddyListings />} />
        <Route path="/BrowsePaddy" element={<BrowsePaddy />} />
        <Route path="/ContactFarmer" element={<ContactFarmer />} />
        <Route path="/FarmerCrops" element={<FarmerCrops />} />
      </Routes>
    </Router>
  );
}