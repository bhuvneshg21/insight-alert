// components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { needHelpData } from '../data';
import { Popover, Button } from 'antd';

function Sidebar({ infoOnly, onNavigateToDashboard }) {
  const [visiblePopover, setVisiblePopover] = useState(false);
  const [popoverContent, setPopoverContent] = useState('');

  const handleNeedHelpClick = (person) => {
    setPopoverContent(
      <div>
        <p>Email: {person.email}</p>
        <p>Mobile: {person.mobile}</p>
      </div>
    );
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
      <div className="info-section">
        <h3>Insight Alerts!</h3>
        <p>Actionable Data for Optimal Results</p>
        <ul>
          <li>Usage Data</li>
          <li>Did You Know?</li>
          <li>Unexplored Features</li>
        </ul>
      </div>
      <div className="need-help-section">
        <h3>Need Help?</h3>
        {needHelpData.map((person, index) => (
          <Popover
            key={index}
            content={popoverContent}
            title="Contact Information"
            trigger="click"
            visible={visiblePopover && popoverContent}
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
