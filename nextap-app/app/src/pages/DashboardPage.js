// src/pages/DashboardPage.js
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import UserCard from '../components/UserCard';
import BalanceDisplay from '../components/BalanceDisplay';
import TransactionHistory from '../components/TransactionHistory';
import SendReceive from '../components/SendReceive';

const DashboardPage = () => {
  const userData = {
    name: 'Arslan Parkar',
    email: 'arslan.parkar@northeastern.edu',
    profilePicture: 'https://via.placeholder.com/150',
  };
  
  const [balance, setBalance] = useState(100);
  const [transactions, setTransactions] = useState([
    { date: '2024-11-13', type: 'sent', amount: 10 },
    { date: '2024-11-12', type: 'received', amount: 50 },
  ]);

  const handleTransaction = (type, amount) => {
    if (type === 'send') {
      setBalance(balance - amount);
      setTransactions([...transactions, { date: new Date().toISOString(), type: 'sent', amount }]);
    } else if (type === 'receive') {
      setBalance(balance + amount);
      setTransactions([...transactions, { date: new Date().toISOString(), type: 'received', amount }]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-col p-6">
        <UserCard userData={userData} />
        <BalanceDisplay balance={balance} />
        <SendReceive balance={balance} onTransaction={handleTransaction} />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default DashboardPage;