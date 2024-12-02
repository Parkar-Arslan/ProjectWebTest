import React from "react";
import "./styles/global.css"; // Adjust the path to your global styles
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import SendReceive from "./pages/SendReceive";
import Statements from "./pages/Statements";
import Balance from "./pages/Balance";
import AddCard from "./pages/AddCard";
import Login from "./pages/Login";

const App: React.FC = () => {
  // Check if the user is logged in (using localStorage for simplicity)
  const isLoggedIn = !!localStorage.getItem("token"); // Returns true if the token exists

  return (
    <Router>
      <Routes>
        {/* Protected Route: Redirect to login if not logged in */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/send-receive" element={isLoggedIn ? <SendReceive /> : <Navigate to="/login" />} />
        <Route path="/statements" element={isLoggedIn ? <Statements /> : <Navigate to="/login" />} />
        <Route path="/balance" element={isLoggedIn ? <Balance /> : <Navigate to="/login" />} />
        <Route path="/add-card" element={isLoggedIn ? <AddCard /> : <Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;