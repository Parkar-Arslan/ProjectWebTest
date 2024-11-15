// src/components/Profile.js
import React from 'react';

const Profile = ({ userData }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-4">
          {/* User's Profile Picture */}
          <img
            src={userData.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="rounded-full w-32 h-32 border-2 border-gray-300"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {userData.name || 'John Doe'}
        </h2>
        <p className="text-center text-gray-600">{userData.email}</p>
        
        <div className="mt-4 flex justify-between">
          <p className="text-lg font-semibold">Balance:</p>
          <p className="text-lg text-green-500 font-semibold">{userData.balance || '0.00'} USD</p>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => alert("Send Money")}
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;