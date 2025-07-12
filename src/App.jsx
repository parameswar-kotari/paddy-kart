import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ForFarmers from './ForFarmers';
import BulkOrders from './BulkOrders';
import PaddyListings from './PaddyListings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ForFarmers" element={<ForFarmers />} />
        <Route path="/BulkOrders" element={<BulkOrders />} />
        <Route path="/PaddyListings" element={<PaddyListings />} />
      </Routes>
    </Router>
  );
}