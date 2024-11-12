// components/TopUpdates.js
import React from 'react';
import UpdateCard from './UpdateCard';
import Chatbot from './Chatbot'; // Assuming a Chatbot component is created
import './TopUpdates.css';

function TopUpdates() {
  const updates = [
    {
      title: 'Eli Lilly',
      description: 'Pharmaceutical company with 10K+ employees...',
      signals: ['Hiring Plans: More roles in Engineering...', 'Partnership with Workforce Council...']
    },
    {
      title: 'Bubble',
      description: 'No-code platform for customizable web apps...',
      signals: ['M&A: Agreement to acquire Flusk...']
    },
    {
      title: 'Cashgrail Pvt',
      description: 'Financial platform with $10M - $25M revenue...',
      signals: ['No recent signals']
    }
  ];

  return (
    <div className="top-updates">
      <h2>Top updates for today <span className="ai-label">Powered by AI</span></h2>
      <p className="updates-description">Prioritized by signal strength and recency</p>
      {updates.map((update, index) => (
        <UpdateCard key={index} update={update} />
      ))}
      <Chatbot /> {/* Adding the Chatbot form */}
    </div>
  );
}

export default TopUpdates;
