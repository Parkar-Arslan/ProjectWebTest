// src/components/Card.js
import React from 'react';
import './components/card.css';  // Import custom component styles

const Card = ({ title, body }) => {
  return (
    <div className="card p-6">
      <h2 className="card-header">{title}</h2>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default Card;