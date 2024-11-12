// components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { needHelpData } from '../data'; // Importing data from data.js
import { Popover, Button } from 'antd'; // Using Ant Design for popover functionality

function Sidebar({ infoOnly, onNavigateToDashboard }) {
  const [visiblePopover, setVisiblePopover] = useState(false);
  const [popoverContent, setPopoverContent] = useState('');

  // Function to handle popover for "Need Help" section
  const handleNeedHelpClick = (person) => {
    setPopoverContent(`Contact ${person.name} at ${person.email}`);
    setVisiblePopover(true);
  };

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
          </ul>
          <Button onClick={onNavigateToDashboard} className="navigate-dashboard-btn">
            Go to Dashboard
          </Button>
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

      <div className="need-help-section">
        <h3>Need Help?</h3>
        {needHelpData.map((person, index) => (
          <Popover
            key={index}
            content={popoverContent}
            title="Contact Information"
            trigger="click"
            visible={visiblePopover && popoverContent === `Contact ${person.name} at ${person.email}`}
            onVisibleChange={(visible) => setVisiblePopover(visible)}
          >
            <p onClick={() => handleNeedHelpClick(person)} className="need-help-name">
              {person.name}
            </p>
          </Popover>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
