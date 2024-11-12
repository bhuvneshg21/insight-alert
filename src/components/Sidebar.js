// components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ infoOnly }) {
  if (infoOnly) {
    return (
      <aside className="sidebar right-sidebar">
        <div className="info-section">
          <h3>Insight Alerts!</h3>
          <p>Actionable Data for Optimal Results</p>
          <ul>
            <li>Usage Data</li>
            <li>Did You Know?</li>
            <li>Unexplored Features</li>
            <li>Need Help? Contact</li>
          </ul>
        </div>
      </aside>
    );
  }
  return (
    <aside className="sidebar left-sidebar">
      <div className="section">
        <h3>Recent Updates Feed</h3>
        <ul>
          <li>Top Updates</li>
          <li>Target Accounts</li>
          <li>Whitespace Companies</li>
        </ul>
        <a href="#">Manage Target Accounts</a>
      </div>
    </aside>
  );
}

export default Sidebar; // default export
