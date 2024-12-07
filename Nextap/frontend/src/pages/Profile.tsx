import React, { useEffect, useState } from "react";
import "../styles/Profile.css";

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return (window.location.href = "/login");

      try {
        const response = await fetch("http://localhost:3200/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) setUser(data);
        else window.location.href = "/login";
      } catch (error) {
        console.error("Error fetching profile:", error);
        window.location.href = "/login";
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Card No: {user.cardNo}</p>
      <p>Acc No: {user.accNo}</p>
    </div>
  );
};

export default Profile;