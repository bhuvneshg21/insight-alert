// components/TopUpdates.js
import React from 'react';
import UpdateCard from './UpdateCard';
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
      <h2>Top updates for today</h2>
      {updates.map((update, index) => (
        <UpdateCard key={index} update={update} />
      ))}
    </div>
  );
}

export default TopUpdates;
