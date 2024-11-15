// src/pages/LoginPage.js
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter your NFC card ID"
          className="border p-2 rounded-md mb-4 w-full"
        />
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg w-full">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;