// src/components/SendReceive.js
import React, { useState } from 'react';

const SendReceive = ({ balance, onTransaction }) => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('send');

  const handleTransaction = () => {
    if (amount <= 0) return alert('Enter a valid amount');
    onTransaction(transactionType, amount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 text-center">
      <h3 className="text-2xl font-semibold mb-6">
        {transactionType === 'send' ? 'Send Money' : 'Receive Money'}
      </h3>
      <p className="mb-4">Balance: {balance} USD</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border-2 p-4 rounded-lg mb-4 w-full text-xl"
      />
      <div className="flex justify-center space-x-6 mb-4">
        <button
          onClick={() => setTransactionType('send')}
          className={`px-6 py-3 rounded-lg ${transactionType === 'send' ? 'bg-red-500' : 'bg-gray-200'} text-white`}
        >
          Send
        </button>
        <button
          onClick={() => setTransactionType('receive')}
          className={`px-6 py-3 rounded-lg ${transactionType === 'receive' ? 'bg-green-500' : 'bg-gray-200'} text-white`}
        >
          Receive
        </button>
      </div>
      <button
        onClick={handleTransaction}
        className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-xl"
      >
        Confirm Transaction
      </button>
    </div>
  );
};

export default SendReceive;