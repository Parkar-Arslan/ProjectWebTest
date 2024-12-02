import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import SendReceive from "./pages/SendReceive";
import Statements from "./pages/Statements";
import Balance from "./pages/Balance";
import AddCard from "./pages/AddCard";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

interface User {
  name: string;
  email: string;
  phone: string;
  cardNo: string;
  accNo: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      {/* Provide required props to NavBar */}
      {user && (
        <NavBar
          user={user}
          onLogout={handleLogout}
          title="Nextap" // Pass required title prop
          loginLabel="Logout" // Pass required loginLabel prop
        />
      )}
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} />
        <Route path="/send-receive" element={user ? <SendReceive /> : <Navigate to="/login" />} />
        <Route path="/statements" element={user ? <Statements /> : <Navigate to="/login" />} />
        <Route path="/balance" element={user ? <Balance /> : <Navigate to="/login" />} />
        <Route path="/add-card" element={user ? <AddCard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;