// src/pages/SendReceivePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import BalanceDisplay from '../components/BalanceDisplay';

const SendReceivePage = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleSend = () => {
    if (amount > 0) {
      setTransactionStatus('Transaction Successful');
      navigate('/dashboard'); // Correct navigation to dashboard
    } else {
      setTransactionStatus('Invalid Amount');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Send/Receive Payment</h2>
      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-semibold">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
        />
        <button
          onClick={handleSend}
          className="mt-4 py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </div>
      {transactionStatus && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">{transactionStatus}</p>
        </div>
      )}
      <BalanceDisplay balance={100.00} /> {/* Mock balance */}
    </div>
  );
};

export default SendReceivePage;