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

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null); // User state

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      {user && <NavBar user={user} onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile onLogout={handleLogout} user={user} /> : <Navigate to="/login" />}
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