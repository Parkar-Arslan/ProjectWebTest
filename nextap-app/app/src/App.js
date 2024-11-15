// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage'; // Only keep DashboardPage
import ProfilePage from './pages/ProfilePage';
import SendReceivePage from './pages/SendReceivePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route to DashboardPage */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sendreceive" element={<SendReceivePage />} />
      </Routes>
    </Router>
  );
};

export default App;