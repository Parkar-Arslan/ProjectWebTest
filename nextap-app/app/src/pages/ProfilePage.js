// src/pages/ProfilePage.js
import React from "react";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import SendReceivePage from "../pages/SendReceivePage";

const ProfilePage = () => {
  const { userId } = useParams(); // Extract userId from URL

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
      <UserCard userId={userId} />
      <div className="mt-6">
        <SendReceivePage userId={userId} />
      </div>
    </div>
  );
};

export default ProfilePage;