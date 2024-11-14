import React, { useEffect, useState, useRef } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './HomePage.css';
import { customersData, insightAlertBoxData } from './data';
import InsightAlertIcon from './assets/InsightAlertSmall.png';
import lily from './assets/lily.png';
import bubble from './assets/bubble.png';
import cashgrail from './assets/cashgrail.png';  
function HomePage() {
  const [showFunctionalitiesBar, setShowFunctionalitiesBar] = useState(false);
  const [popoverData, setPopoverData] = useState(null);
  const popoverRef = useRef(null);
  const navigate = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);
  const toggleFunctionalitiesBar = () => {
    setShowFunctionalitiesBar(!showFunctionalitiesBar);
  };

  const openPopover = (manager) => {
    const contactInfo = {
      accountManager: {
        name: "Spandana Chandra",
        email: "spandana@zoominfo.com",
        phone: "+91-44-4567-8900",
      },
      customerSuccessManager: {
        name: "Jayakrishna Thirumeni",
        email: "jayakrishna@zoominfo.com",
        phone: "+91-44-4567-8901",
      },
    };
    setPopoverData(contactInfo[manager]);
  };

  const closePopover = () => {
    setPopoverData(null);
  };

  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "BC08jGaxrV2-Cv9GMprG_",
      domain: "www.chatbase.co",
    };
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    // Close popover when clicking outside
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        closePopover();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sales-os">
         <header className="header">
        <div className="header-left">
          <div className="logo">Sales<sup>+</sup></div>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search for companies, contacts, industries, etc." />
            <span className="advanced-search">Advanced Search</span>
          </div>
        </div>
        <nav className="header-menu">
          <a href="#" className="menu-item">Home</a>
          <a href="#" className="menu-item">Intent</a>
          <a href="#" className="menu-item">Tracker</a>
          <a href="#" className="menu-item">Lists</a>
          <a href="#" className="menu-item">WebSights</a>
          <a href="#" className="menu-item">Workflows</a>
          <a href="#" className="menu-item">Chat</a>
          <a href="#" className="menu-item">More</a>
          <span className="notification-icon">🔔</span>
        </nav>
      </header>

      <div className="content">
        {/* Left Sidebar - 25% */}
        <div className="left-sidebar">
          <h2>Recent Updates Feed</h2>
          <ul className="updates-list">
            <li>Top Updates</li>
            <li>Target Accounts: 5</li>
            <li>Whitespace Companies: 50</li>
          </ul>
          <Link to="#" className="manage-link">Manage Target Accounts</Link>

          <div className="insight-alert-box">
            <h3>
              <img src={InsightAlertIcon} alt="Insight Alert Icon" className="insight-alert-icon" />
              Insight Alerts!
            </h3>
            <p>Actionable Data for Optimal Results</p>
            <button
              className="view-dashboard-link"
              onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
            >
              View Dashboard
            </button>
            <h4>Usage Data</h4>
          <ul>
            <li>You have generated 120 CoPilot-driven contact searches this week.</li>
            <li>You have exported 75 contact data.</li>
            <li>You have successfully set up your Domain under Websight to track companies visiting your company.</li>
          </ul>
          <h4>Did You Know?</h4>
          <ul>
            <li>Based on the exports to your CRM over the past 8 weeks, we have identified that 40% of your data requires updates.</li>
            <li>According to your Target account records, 9 companies have visited your Websight in the past two weeks.</li>
          </ul>
          <h4>Unexplored Features</h4>
          <p>You have not set up the Intent topics.</p>
          </div>
          

          <div className="need-help-box">
            <h3>Need Help?</h3>
            <p>
              <a href="#" onClick={(e) => { e.preventDefault(); openPopover("accountManager"); }}>
                Account Manager: Spandana Chandra
              </a>
            </p>
            <p>
              <a href="#" onClick={(e) => { e.preventDefault(); openPopover("customerSuccessManager"); }}>
                Customer Success Manager: Jayakrishna Thirumeni
              </a>
            </p>
          </div>

          {popoverData && (
            <div className="popover" ref={popoverRef}>
              <h4>{popoverData.name}</h4>
              <p>Email: {popoverData.email}</p>
              <p>Phone: {popoverData.phone}</p>
              <button onClick={closePopover}>Close</button>
            </div>
          )}
        </div>

        {/* Middle Section - 50% */}
        {/* <main className="middle-content"> */}
        <div className="main-content"> 
          {/* Top Updates Box */}
        <div className="top-updates-box">
          <h2>Top updates for today <span className="powered-by-ai">Powered by AI</span></h2>
          <p className="updates-description">Prioritized by signal strength and recency</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
         {/* Eli Lilly Update Box */}
         <div className="update-card">
          <div className="update-header">
            <img src={lily} alt="icon" className="company-icon" />
            <h3>Eli Lilly <button className="ask-copilot-btn">Ask Copilot</button></h3>
          </div>
          <div className="update-details">
            <span className="badge">Great Account Fit</span>
            <span className="badge">Account in Salesforce</span>
            <span className="badge">Target Account</span>
            <p className="description">Eli Lilly is a pharmaceutical company with over 10K employees that develops and manufactures a range of healthcare products...</p>
          </div>
          <div className="recent-signals">
            <h4>Recent signals</h4>
            <p><strong>Last 30 days</strong></p>
            <ul>
              <li><a href="#">Hiring Plans:</a> Eli Lilly has more open roles in Engineering & Technical...</li>
              <li><a href="#">Partnership:</a> Eli Lilly has joined the Workforce Council...</li>
            </ul>
          </div>
          <button className="find-group-btn">Reach out to potential Buying Group members</button>
        </div>
        <div className="update-card">
          <div className="update-header">
            <img src={lily} alt="icon" className="company-icon" />
            <h3>Eli Lilly <button className="ask-copilot-btn">Ask Copilot</button></h3>
          </div>
          <div className="update-details">
            <span className="badge">Great Account Fit</span>
            <span className="badge">Account in Salesforce</span>
            <span className="badge">Target Account</span>
            <p className="description">Eli Lilly is a pharmaceutical company with over 10K employees that develops and manufactures a range of healthcare products...</p>
          </div>
          <div className="recent-signals">
            <h4>Recent signals</h4>
            <p><strong>Last 30 days</strong></p>
            <ul>
              <li><a href="#">Hiring Plans:</a> Eli Lilly has more open roles in Engineering & Technical...</li>
              <li><a href="#">Partnership:</a> Eli Lilly has joined the Workforce Council...</li>
            </ul>
          </div>
          <button className="find-group-btn">Reach out to potential Buying Group members</button>
        </div>
        <div className="update-card">
          <div className="update-header">
            <img src={lily} alt="icon" className="company-icon" />
            <h3>Eli Lilly <button className="ask-copilot-btn">Ask Copilot</button></h3>
          </div>
          <div className="update-details">
            <span className="badge">Great Account Fit</span>
            <span className="badge">Account in Salesforce</span>
            <span className="badge">Target Account</span>
            <p className="description">Eli Lilly is a pharmaceutical company with over 10K employees that develops and manufactures a range of healthcare products...</p>
          </div>
          <div className="recent-signals">
            <h4>Recent signals</h4>
            <p><strong>Last 30 days</strong></p>
            <ul>
              <li><a href="#">Hiring Plans:</a> Eli Lilly has more open roles in Engineering & Technical...</li>
              <li><a href="#">Partnership:</a> Eli Lilly has joined the Workforce Council...</li>
            </ul>
          </div>
          <button className="find-group-btn">Reach out to potential Buying Group members</button>
        </div>
          {/* <div className="customer-cards">
            {customersData.map(customer => (
              <div className="customer-card" key={customer.id}>
                <h3>{customer.name}</h3>
                <p><strong>Great Account Fit</strong> | Account in Salesforce | Target Account</p>
                <p>{customer.description}</p>
                <ul>
                  <li>Hiring Plans: {customer.hiringPlans}</li>
                  <li>Partnership: {customer.partnership}</li>
                </ul>
                <button className="copilot-btn">Ask Copilot</button>
              </div>
            ))}
          </div> */}
          </div>
        {/* </main> */}

        {/* Right Sidebar - 25% */}
        <div className="right-sidebar">
          {/* This section is reserved for the chatbot */}
        </div>

        {/* Functionalities Bar */}
        <div className={`functionalities-bar ${showFunctionalitiesBar ? "expanded" : ""}`} onClick={toggleFunctionalitiesBar}>
          <p>{showFunctionalitiesBar ? "Click to see more functionalities" : "70% of functionalities used"}</p>
          {showFunctionalitiesBar && (
            <div className="functionalities-details">
              <p>Unexplored Functionalities:</p>
              <ul>
                <li><a href="https://learningmaterial.com/feature1">Feature 1</a></li>
                <li><a href="https://learningmaterial.com/feature2">Feature 2</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;