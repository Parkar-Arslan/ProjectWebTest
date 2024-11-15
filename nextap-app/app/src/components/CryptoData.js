// src/components/CryptoData.js
import React, { useState, useEffect } from 'react';

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState({});

  useEffect(() => {
    // Use a demo API or static data for now
    setCryptoData({
      name: 'Bitcoin',
      price: 60000
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-semibold mb-4">Live Crypto Data</h3>
      <p>{cryptoData.name}: ${cryptoData.price}</p>
    </div>
  );
};

export default CryptoData;