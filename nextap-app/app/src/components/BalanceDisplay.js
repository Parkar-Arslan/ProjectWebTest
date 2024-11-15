// src/components/BalanceDisplay.js
import React from 'react';

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-80 text-center mt-6">
      <h3 className="text-2xl font-semibold text-white">Balance</h3>
      <p className="text-4xl text-white">{balance} USD</p>
    </div>
  );
};

export default BalanceDisplay;