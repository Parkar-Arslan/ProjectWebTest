import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import SendReceive from "./pages/SendReceive";
import Statements from "./pages/Statements";
import Balance from "./pages/Balance";
import AddCard from "./pages/AddCard"; // Import AddCard
import Login from "./pages/Login"; // Import Login Page


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/send-receive" element={<SendReceive />} />
        <Route path="/statements" element={<Statements />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/add-card" element={<AddCard />} /> {/* Add AddCard route */}
        <Route path="/login" element={<Login />} /> {/* Add Login Route */}
      </Routes>
    </Router>
  );
};

export default App;