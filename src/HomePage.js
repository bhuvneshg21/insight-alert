import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
          <div className="user-initials">FG</div>
        </nav>
      </header>

      <div className="content">
        {/* Left Sidebar - 25% */}

        <div className="left-sidebar">
          <h2 class="nomargin" >Recent Updates Feed </h2>
          <ul className="updates-list" class="nomargin">
            <li>Top Updates</li>
            <li>Target Accounts: 5</li>
            <li>Whitespace Companies: 50</li>
          </ul>
          <Link to="#" className="manage-link">Manage Target Accounts</Link>

          <div className="insight-alert-box">
            <div className="insight-alert-header" >
              <img src={InsightAlertIcon} alt="Insight Alert Icon" className="insight-alert-icon" />
              <h3 >Insight Alerts!</h3>
            </div>
            <p className="alert-subtext "><strong>Actionable Data for Optimal Results</strong></p>

            {/* <button
              className="view-dashboard-link"
              onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
            >
              View Dashboard
            </button> */}
            <h4 class="nomargin">Usage Data</h4>
            <ul class="nomargin">
              <li>You have generated 120 CoPilot-driven contact searches this week.</li>
              <li>You have exported 75 contact data.</li>
              <li>You have successfully set up your Domain under Websight to track companies visiting your company.</li>
            </ul>
            <h4 class="nomargin">Did You Know?</h4>
            <ul class="nomargin">
              <li>Based on the exports to your CRM over the past 8 weeks, we have identified that 40% of your data requires updates.</li>
              <li>According to your Target account records, 9 companies have visited your Websight in the past two weeks.</li>
            </ul>
            <h4 class="nomargin">Unexplored Features</h4><ul class="nomargin">
              <li>You have not set up the Intent topics.</li></ul>
          </div>
          <div
            className="feature-usage-bar" 
            onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
          >
            <div className="feature-usage-progress" style={{ width: '65%' }}></div>
            <span className="feature-usage-text">You have used 65% of the features. Know more.</span>
          </div>
          <div className="need-help-box nomargin" >
            <h3 className="need-help-title nomargin" >Need Help? </h3>
            <p className="need-help-subtext nomargin" >Contact Customer Success Manager or Account Manager</p>

            <div className="manager-section nomargin">
              <h4 class="nomargin">Customer Success Manager</h4>
              <p className="manager-name nomargin">Aaron Corso</p>
              <p className="manager-email nomargin">aaron.corso@zoominfo.com</p>
            </div>

            <div className="manager-section nomargin">
              <h4 class="nomargin">Account Manager</h4>
              <p className="manager-name nomargin">Kendal Borras</p>
              <p className="manager-email nomargin">kendal.borras@zoominfo.com</p>
            </div>
          </div>
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
              <h3>
                Eli Lilly
                <button className="ask-copilot-btn">Ask Copilot</button>
              </h3>
            </div>
            <div className="update-details">
              <span className="badge">Great Account Fit</span>
              <span className="badge">Account in Salesforce</span>
              <span className="badge">Target Account</span>
              <p className="description">Eli Lilly is a pharmaceutical company with over 10k employees that develops and manufactures a range of healthcare products and solutions, generating $34.12 billion in annual revenue. </p>
            </div>
            <div className="recent-signals">
              <h4>Recent signals</h4>
              <p><strong>Last 30 days</strong></p>
              <ul>
                <li><a href="#">Hiring Plans:</a> Ei Lilly has more open roles in Engineering & Technical than it has had at any time in the past 12 months.<a href="#" class="smallSource">Source</a></li>
                <li><a href="#">Partnership:</a> Eli Lilly has joined the workforce Council (WFC), which will focus on initiatives related to decision-making education.<a href="#" class="smallSource">Source</a></li>
              </ul>
            </div>
            <div><h4>Reach out to potential Buying Group members <button className="find-group-btn">Find Buying Group</button></h4>
            </div></div>

        {/* Bubble Update Box import cashgrail from './assets/cashgrail.png'; */}
       

<div className="update-card">
            <div className="update-header">
              <img src={bubble} alt="icon" className="company-icon" />
              <h3>
              Bubble
                <button className="ask-copilot-btn">Ask Copilot</button>
              </h3>
            </div>
            <div className="update-details">
              <span className="badge">Great Account Fit</span>
              <span className="badge">Account in Salesforce</span>
              <span className="badge">Target Account</span>
              <p className="description">Bubble is a no-code platform that allows users to build fully customizable web applications and workflows. The company has 100 - 250 employees and generated $10M - $25M in revenue </p>
            </div>
            <div className="recent-signals">
              <h4>Recent signals</h4>
              <p><strong>Last 30 days</strong></p>
              <ul>
                {/* <li><a href="#">Hiring Plans:</a> Ei Lilly has more open roles in Engineering & Technical than it has had at any time in the past 12 months.</li> */}
                <li><a href="#">Mergers & Acquisitions (M&A):</a> Bubble has entered into an agreement to acquire Flusk.<a href="#" class="smallSource">Source</a></li>
              </ul>
            </div>
            <div><h4>Reach out to potential Buying Group members <button className="find-group-btn">Find Buying Group</button></h4>
            </div></div>
           {/* cashgrail Update Box import cashgrail from './assets/cashgrail.png'; */}
       

<div className="update-card">
            <div className="update-header">
              <img src={cashgrail} alt="icon" className="company-icon" />
              <h3>
              Cashgrail
                <button className="ask-copilot-btn">Ask Copilot</button>
              </h3>
            </div>
            <div className="update-details">
              <span className="badge">Great Account Fit</span>
              <span className="badge">Account in Salesforce</span>
              <span className="badge">Target Account</span>
              <p className="description">Cashgril is a fintech company specializing in digital payment solutions, with approximately 500-1000 employees. It generated an estimated $15 million in revenue last year, driven by partnerships with major e-commerce platforms. </p>
            </div>
            <div className="recent-signals">
              <h4>Recent signals</h4>
              <p><strong>Last 30 days</strong></p>
              <ul>
                <li><a href="#">Funding:</a>Cashgril recently secured a Series B funding round, raising $50 million from several venture capital firms.<a href="#" class="smallSource">Source</a></li>
                <li><a href="#">Product Launch:</a> Cashgril has introduced a new feature for instant cross-border payments, increasing accessibility for international customers.<a href="#" class="smallSource">Source</a></li>
              </ul>
            </div>
            <div><h4>Reach out to potential Buying Group members <button className="find-group-btn">Find Buying Group</button></h4>
            </div></div>
       

          {/* Right Sidebar - 25% */}
          <div className="right-sidebar">
            {/* This section is reserved for the chatbot */}
          </div>
        </div>
      </div >
    </div >
  );
}

export default HomePage;