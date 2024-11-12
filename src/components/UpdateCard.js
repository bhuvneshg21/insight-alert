// components/UpdateCard.js
import React from 'react';
import './UpdateCard.css';

function UpdateCard({ update }) {
  return (
    <div className="update-card">
      <h3>{update.title}</h3>
      <p>{update.description}</p>
      <div className="signals">
        {update.signals.map((signal, index) => (
          <p key={index}>{signal}</p>
        ))}
      </div>
      <button className="find-group-btn">Find Buying Group</button>
    </div>
  );
}

export default UpdateCard;
