// src/components/UserCard.js
import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <div className="flex justify-center mb-4">
        <img
          src={userData.profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-indigo-600"
        />
      </div>
      <h3 className="text-2xl font-semibold text-indigo-600">{userData.name}</h3>
      <p className="text-lg text-gray-500">{userData.email}</p>
    </div>
  );
};

export default UserCard;