// src/components/TransactionHistory.js
import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Transaction History</h3>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              {transaction.type === 'sent' ? (
                <FaArrowDown className="text-red-500 mr-2" />
              ) : (
                <FaArrowUp className="text-green-500 mr-2" />
              )}
              <span className="text-gray-600">{transaction.date}</span>
            </div>
            <span
              className={`text-xl ${transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}
            >
              {transaction.type === 'sent' ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;