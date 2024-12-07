import React, { useState } from "react";
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
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // User state

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user state on logout
  };

  return (
    <Router>
      {/* Show NavBar only if the user is logged in */}
      {user && <NavBar user={user} onLogout={handleLogout} title="Nextap" loginLabel="Logout" />}
      <Routes>
        {/* Public Route: Login */}
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/send-receive"
          element={user ? <SendReceive /> : <Navigate to="/login" />}
        />
        <Route
          path="/statements"
          element={user ? <Statements /> : <Navigate to="/login" />}
        />
        <Route
          path="/balance"
          element={user ? <Balance /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-card"
          element={user ? <AddCard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;