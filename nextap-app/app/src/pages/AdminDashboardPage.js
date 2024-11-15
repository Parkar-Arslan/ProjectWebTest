// src/pages/AdminDashboardPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/admin/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="font-semibold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Balance: {user.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;