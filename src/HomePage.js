import React, { useEffect, useState, useRef } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './HomePage.css';
import { customersData, insightAlertBoxData } from './data';
import InsightAlertIcon from './assets/InsightAlertSmall.png';
  
function HomePage() {
  const [showFunctionalitiesBar, setShowFunctionalitiesBar] = useState(false);
  const [popoverData, setPopoverData] = useState(null);
  const popoverRef = useRef(null);
  const navigate = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);````````````````````````````````````````````````````````````````````````````````````````````
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
      chatbotId: "s8ifrplEIKk1UJKzrkTQ6",
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
        <h1>Sales OS</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
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
            <button
              className="view-dashboard-link"
              onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
            >
              View Dashboard
            </button>
            <p><strong>Usage Data:</strong> {insightAlertBoxData.usageData[0]}</p>
            <p><strong>Did You Know?</strong> {insightAlertBoxData.didYouKnow[0]}</p>
            <p><strong>Unexplored Features:</strong> {insightAlertBoxData.unexploredFeatures[0]}</p>
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
        <main className="middle-content">
          <h2>Top updates for today</h2>
          <div className="customer-cards">
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
          </div>
        </main>

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

// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';
// import { customersData, insightAlertBoxData } from './data';
// import InsightAlertIcon from './assets/InsightAlert.png';

// function HomePage() {
//   const [showFunctionalitiesBar, setShowFunctionalitiesBar] = useState(false);
//   const [popoverData, setPopoverData] = useState(null);
//   const popoverRef = useRef(null);

//   const toggleFunctionalitiesBar = () => {
//     setShowFunctionalitiesBar(!showFunctionalitiesBar);
//   };

//   const openPopover = (manager) => {
//     const contactInfo = {
//       accountManager: {
//         name: "Spandana Chandra",
//         email: "spandana@zoominfo.com",
//         phone: "+91-44-4567-8900",
//       },
//       customerSuccessManager: {
//         name: "Jayakrishna Thirumeni",
//         email: "jayakrishna@zoominfo.com",
//         phone: "+91-44-4567-8901",
//       },
//     };
//     setPopoverData(contactInfo[manager]);
//   };

//   const closePopover = () => {
//     setPopoverData(null);
//   };

//   useEffect(() => {
//     window.embeddedChatbotConfig = {
//       chatbotId: "s8ifrplEIKk1UJKzrkTQ6",
//       domain: "www.chatbase.co",
//     };
//     const script = document.createElement('script');
//     script.src = "https://www.chatbase.co/embed.min.js";
//     script.defer = true;
//     document.body.appendChild(script);

//     // Close popover when clicking outside
//     const handleClickOutside = (event) => {
//       if (popoverRef.current && !popoverRef.current.contains(event.target)) {
//         closePopover();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="sales-os">
//       <header className="header">
//         <h1>Sales OS</h1>
//         <nav className="nav">
//           <Link to="/">Home</Link>
//         </nav>
//       </header>

//       <div className="content">
//         {/* Left Sidebar - 25% */}
//         <div className="left-sidebar">
//           <h2>Recent Updates Feed</h2>
//           <ul className="updates-list">
//             <li>Top Updates</li>
//             <li>Target Accounts: 5</li>
//             <li>Whitespace Companies: 50</li>
//           </ul>
//           <Link to="#" className="manage-link">Manage Target Accounts</Link>

//           <div className="insight-alert-box">
//             <h3>
//               <img src={InsightAlertIcon} alt="Insight Alert Icon" className="insight-alert-icon" />
//               Insight Alerts!
//             </h3>
//             <p><strong>Usage Data:</strong> {insightAlertBoxData.usageData[0]}</p>
//             <p><strong>Did You Know?</strong> {insightAlertBoxData.didYouKnow[0]}</p>
//             <p><strong>Unexplored Features:</strong> {insightAlertBoxData.unexploredFeatures[0]}</p>
//           </div>

//           <div className="need-help-box">
//             <h3>Need Help?</h3>
//             <p>
//               <a href="#" onClick={(e) => { e.preventDefault(); openPopover("accountManager"); }}>
//                 Account Manager: Spandana Chandra
//               </a>
//             </p>
//             <p>
//               <a href="#" onClick={(e) => { e.preventDefault(); openPopover("customerSuccessManager"); }}>
//                 Customer Success Manager: Jayakrishna Thirumeni
//               </a>
//             </p>
//           </div>

//           {popoverData && (
//             <div className="popover" ref={popoverRef}>
//               <h4>{popoverData.name}</h4>
//               <p>Email: {popoverData.email}</p>
//               <p>Phone: {popoverData.phone}</p>
//               <button onClick={closePopover}>Close</button>
//             </div>
//           )}
//         </div>

//         {/* Middle Section - 50% */}
//         <main className="middle-content">
//           <h2>Top updates for today</h2>
//           <div className="customer-cards">
//             {customersData.map(customer => (
//               <div className="customer-card" key={customer.id}>
//                 <h3>{customer.name}</h3>
//                 <p><strong>Great Account Fit</strong> | Account in Salesforce | Target Account</p>
//                 <p>{customer.description}</p>
//                 <ul>
//                   <li>Hiring Plans: {customer.hiringPlans}</li>
//                   <li>Partnership: {customer.partnership}</li>
//                 </ul>
//                 <button className="copilot-btn">Ask Copilot</button>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar - 25% */}
//         <div className="right-sidebar">
//           {/* This section is reserved for the chatbot */}
//         </div>

//         {/* Functionalities Bar */}
//         <div className={`functionalities-bar ${showFunctionalitiesBar ? "expanded" : ""}`} onClick={toggleFunctionalitiesBar}>
//           <p>{showFunctionalitiesBar ? "Click to see more functionalities" : "70% of functionalities used"}</p>
//           {showFunctionalitiesBar && (
//             <div className="functionalities-details">
//               <p>Unexplored Functionalities:</p>
//               <ul>
//                 <li><a href="https://learningmaterial.com/feature1">Feature 1</a></li>
//                 <li><a href="https://learningmaterial.com/feature2">Feature 2</a></li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;



// // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // import './HomePage.css';
// // import { customersData, insightAlertBoxData } from './data';
// // import InsightAlertIcon from './assets/InsightAlert.png';
// // import { Link, useNavigate } from 'react-router-dom';
// // function HomePage() {
// //   const [showFunctionalitiesBar, setShowFunctionalitiesBar] = useState(false);
// //   const [popoverData, setPopoverData] = useState(null);
// //   const navigate = useNavigate();
// //   const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);
// //   const toggleFunctionalitiesBar = () => {
// //     setShowFunctionalitiesBar(!showFunctionalitiesBar);
// //   };

// //   const openPopover = (manager) => {
// //     const contactInfo = {
// //       accountManager: {
// //         name: "Spandana Chandra",
// //         email: "spandana.zoominfo.com",
// //         phone: "+91-44-4567-8900",
// //       },
// //       customerSuccessManager: {
// //         name: "Jayakrishna Thirumeni",
// //         email: "jayakrishna.zoominfo.com",
// //         phone: "+91-44-4567-8901",
// //       },
// //     };
// //     setPopoverData(contactInfo[manager]);
// //   };

// //   const closePopover = () => {
// //     setPopoverData(null);
// //   };

// //   useEffect(() => {
// //     window.embeddedChatbotConfig = {
// //       chatbotId: "s8ifrplEIKk1UJKzrkTQ6",
// //       domain: "www.chatbase.co",
// //     };
// //     const script = document.createElement('script');
// //     script.src = "https://www.chatbase.co/embed.min.js";
// //     script.defer = true;
// //     document.body.appendChild(script);
// //   }, []);

// //   return (
// //     <div className="sales-os">
// //       <header className="header">
// //         <h1>Sales OS</h1>
// //         <nav className="nav">
// //           <Link to="/">Home</Link>
// //         </nav>
// //       </header>

// //       <div className="content">
// //         <div className="sidebar">
// //           <h2>Recent Updates Feed</h2>
// //           <ul className="updates-list">
// //             <li>Top Updates</li>
// //             <li>Target Accounts: 5</li>
// //             <li>Whitespace Companies: 50</li>
// //           </ul>
// //           {/* <Link to="#" className="manage-link">Manage Target Accounts</Link> */}

// //           <div className="insight-alert-box">
// //             <h3>
// //               <img src={InsightAlertIcon} alt="Insight Alert Icon" className="insight-alert-icon" />
// //               Insight Alerts!
// //             </h3>
// //             <button
// //               className="view-dashboard-link"
// //               onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
// //             >
// //               View Dashboard
// //             </button>
// //             <p><strong>Usage Data:</strong> {insightAlertBoxData.usageData[0]}</p>
// //             <p><strong>Did You Know?</strong> {insightAlertBoxData.didYouKnow[0]}</p>
// //             <p><strong>Unexplored Features:</strong> {insightAlertBoxData.unexploredFeatures[0]}</p>
// //           </div>

// //           <div className="need-help-box">
// //             <h3>Need Help?</h3>
// //             <p onClick={() => openPopover("accountManager")}>Account Manager: Spandana Chandra</p>
// //             <p onClick={() => openPopover("customerSuccessManager")}>Customer Success Manager: Jayakrishna Thirumeni</p>
// //           </div>

// //           {popoverData && (
// //             <div className="popover">
// //               <h4>{popoverData.name}</h4>
// //               <p>Email: {popoverData.email}</p>
// //               <p>Phone: {popoverData.phone}</p>
// //               <button onClick={closePopover}>Close</button>
// //             </div>
// //           )}
// //         </div>

// //         <main className="main-content">
// //           <h2>Top updates for today</h2>
// //           <div className="customer-cards">
// //             {customersData.map(customer => (
// //               <div className="customer-card" key={customer.id}>
// //                 <h3>{customer.name}</h3>
// //                 <p><strong>Great Account Fit</strong> | Account in Salesforce | Target Account</p>
// //                 <p>{customer.description}</p>
// //                 <ul>
// //                   <li>Hiring Plans: {customer.hiringPlans}</li>
// //                   <li>Partnership: {customer.partnership}</li>
// //                 </ul>
// //                 <button className="copilot-btn">Ask Copilot</button>
// //               </div>
// //             ))}
// //           </div>
// //         </main>

// //         <div className={`functionalities-bar ${showFunctionalitiesBar ? "expanded" : ""}`} onClick={toggleFunctionalitiesBar}>
// //           <p>{showFunctionalitiesBar ? "Click to see more functionalities" : "70% of functionalities used"}</p>
// //           {showFunctionalitiesBar && (
// //             <div className="functionalities-details">
// //               <p>Unexplored Functionalities:</p>
// //               <ul>
// //                 <li><a href="https://learningmaterial.com/feature1">Feature 1</a></li>
// //                 <li><a href="https://learningmaterial.com/feature2">Feature 2</a></li>
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import './HomePage.css';
// // // // import { insightAlertBoxData, customersData } from './data';

// // // // function HomePage() {
// // // //   const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);
// // // //   const navigate = useNavigate();

// // // //   const handleCustomerChange = (e) => {
// // // //     const customer = customersData.find(c => c.id === parseInt(e.target.value));
// // // //     setSelectedCustomer(customer);
// // // //   };

// // // //   useEffect(() => {
// // // //     // Configure and load the embedded chatbot
// // // //     window.embeddedChatbotConfig = {
// // // //       chatbotId: "s8ifrplEIKk1UJKzrkTQ6",
// // // //       domain: "www.chatbase.co",
// // // //     };
// // // //     const script = document.createElement('script');
// // // //     script.src = "https://www.chatbase.co/embed.min.js";
// // // //     script.setAttribute('chatbotId', "s8ifrplEIKk1UJKzrkTQ6");
// // // //     script.setAttribute('domain', "www.chatbase.co");
// // // //     script.defer = true;
// // // //     document.body.appendChild(script);
// // // //   }, []);

// // // //   return (
// // // //     <div className="sales-os">
// // // //       <header className="header">
// // // //         <h1>Sales OS</h1>
// // // //         <nav className="nav">
// // // //           <Link to="/">Home</Link>
// // // //         </nav>
// // // //       </header>

// // // //       <div className="content">
// // // //         {/* Sidebar for Recent Updates Feed and Insight Alerts */}
// // // //         <div className="sidebar">
// // // //           <h2 className="sidebar-title">Recent Updates Feed</h2>
// // // //           <ul className="updates-list">
// // // //             <li>Top Updates</li>
// // // //             <li>Target Accounts: 5</li>
// // // //             <li>Whitespace Companies: 50</li>
// // // //           </ul>
// // // //           <Link to={`/insight-alert/${selectedCustomer.id}`} className="manage-link">Manage Target Accounts</Link>

// // // //           {/* Insight Alert Box with Link to Dashboard */}
// // // //           <div className="insight-alert-box">
// // // //             <h3>
// // // //               <Link to={`/insight-alert/${selectedCustomer.id}`} className="insight-alert-link">Insight Alerts!</Link>
// // // //             </h3>
// // // //             <p className="subtext"><strong>Actionable Data for Optimal Results</strong></p>
// // // //             <p><strong>Usage Data:</strong> {insightAlertBoxData.usageData[Math.floor(Math.random() * insightAlertBoxData.usageData.length)]}</p>
// // // //             <p><strong>Did You Know?</strong> {insightAlertBoxData.didYouKnow[Math.floor(Math.random() * insightAlertBoxData.didYouKnow.length)]}</p>
// // // //             <p><strong>Unexplored Features:</strong> {insightAlertBoxData.unexploredFeatures[Math.floor(Math.random() * insightAlertBoxData.unexploredFeatures.length)]}</p>
// // // //           </div>

// // // //           {/* Need Help Box */}
// // // //           <div className="need-help-box">
// // // //             <h3>Need Help?</h3>
// // // //             <p>Account Manager: {insightAlertBoxData.contacts.accountManager}</p>
// // // //             <p>Customer Success Manager: {insightAlertBoxData.contacts.customerSuccessManager}</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content Area */}
// // // //         <main className="main-content">
// // // //           <h2 className="main-title">Top Updates for Today <span className="powered-by-ai">Powered by AI</span></h2>

// // // //           {/* Dropdown for selecting customer */}
// // // //           <div className="customer-selector">
// // // //             <label>Select Customer:</label>
// // // //             <select onChange={handleCustomerChange} value={selectedCustomer.id}>
// // // //               {customersData.map((customer) => (
// // // //                 <option key={customer.id} value={customer.id}>
// // // //                   {customer.name}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //           </div>

// // // //           {/* Customer Details Preview */}
// // // //           <div className="customer-insight-preview">
// // // //             <h3>{selectedCustomer.name}</h3>
// // // //             <p><strong>Great Account Fit</strong> | Account in Salesforce | Target Account</p>
// // // //             <p>{selectedCustomer.description}</p>
// // // //             <ul className="signals-list">
// // // //               <li><strong>Recent Signals</strong></li>
// // // //               <li>Hiring Plans: {selectedCustomer.hiringPlans}</li>
// // // //               <li>Partnership: {selectedCustomer.partnership}</li>
// // // //             </ul>
// // // //             <button
// // // //               className="view-dashboard-link"
// // // //               onClick={() => navigate(`/insight-alert/${selectedCustomer.id}`)}
// // // //             >
// // // //               View Dashboard
// // // //             </button>
// // // //           </div>
// // // //         </main>

// // // //         {/* Chatbot Icon */}
// // // //         <div className="chatbot">
// // // //           <p>Chatbot Icon Here</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default HomePage;

// // // import React, { useEffect, useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import './HomePage.css';
// // // import { insightAlertBoxData, customersData } from './data';
// // // import InsightAlertIcon from './assets/InsightAlert.png'; // Path to your InsightAlert image

// // // function HomePage() {
// // //   const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);
// // //   const [showFunctionalitiesBar, setShowFunctionalitiesBar] = useState(false);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [popupData, setPopupData] = useState(null);
// // //   const navigate = useNavigate();

// // //   const handleCustomerChange = (e) => {
// // //     const customer = customersData.find(c => c.id === parseInt(e.target.value));
// // //     setSelectedCustomer(customer);
// // //   };

// // //   const toggleFunctionalitiesBar = () => {
// // //     setShowFunctionalitiesBar(!showFunctionalitiesBar);
// // //   };

// // //   const openPopup = (manager) => {
// // //     setPopupData(insightAlertBoxData.contacts[manager]);
// // //     setShowPopup(true);
// // //   };

// // //   const closePopup = () => {
// // //     setShowPopup(false);
// // //     setPopupData(null);
// // //   };

// // //   useEffect(() => {
// // //     window.embeddedChatbotConfig = {
// // //       chatbotId: "s8ifrplEIKk1UJKzrkTQ6",
// // //       domain: "www.chatbase.co",
// // //     };
// // //     const script = document.createElement('script');
// // //     script.src = "https://www.chatbase.co/embed.min.js";
// // //     script.defer = true;
// // //     document.body.appendChild(script);
// // //   }, []);

// // //   return (
// // //     <div className="sales-os">
// // //       <header className="header">
// // //         <h1>Sales OS</h1>
// // //         <nav className="nav">
// // //           <Link to="/">Home</Link>
// // //         </nav>
// // //       </header>

// // //       <div className="content">
// // //         <div className="sidebar">
// // //           <h2 className="sidebar-title">Recent Updates Feed</h2>
// // //           <ul className="updates-list">
// // //             <li>Top Updates</li>
// // //             <li>Target Accounts: 5</li>
// // //             <li>Whitespace Companies: 50</li>
// // //           </ul>
// // //           <Link to={`/insight-alert/${selectedCustomer.id}`} className="manage-link">Manage Target Accounts</Link>

// // //           <div className="insight-alert-box">
// // //             <h3>
// // //               <img src={InsightAlertIcon} alt="Insight Alert Icon" className="insight-alert-icon" />
// // //               <Link to={`/insight-alert/${selectedCustomer.id}`} className="insight-alert-link">Insight Alerts!</Link>
// // //             </h3>
// // //             <p><strong>Usage Data:</strong> {insightAlertBoxData.usageData[Math.floor(Math.random() * insightAlertBoxData.usageData.length)]}</p>
// // //             <p><strong>Did You Know?</strong> {insightAlertBoxData.didYouKnow[Math.floor(Math.random() * insightAlertBoxData.didYouKnow.length)]}</p>
// // //             <p><strong>Unexplored Features:</strong> {insightAlertBoxData.unexploredFeatures[Math.floor(Math.random() * insightAlertBoxData.unexploredFeatures.length)]}</p>
// // //           </div>

// // //           <div className="need-help-box">
// // //             <h3>Need Help?</h3>
// // //             <p onClick={() => openPopup("accountManager")}>Account Manager: {insightAlertBoxData.contacts.accountManager}</p>
// // //             <p onClick={() => openPopup("customerSuccessManager")}>Customer Success Manager: {insightAlertBoxData.contacts.customerSuccessManager}</p>
// // //           </div>
// // //         </div>

// // //         <main className="main-content">
// // //           {/* Main content remains as it was */}
// // //         </main>

// // //         {showPopup && (
// // //           <div className="popup">
// // //             <div className="popup-content">
// // //               <img src={popupData.image} alt={popupData.name} className="manager-image" />
// // //               <h3>{popupData.name}</h3>
// // //               <p>{popupData.designation}</p>
// // //               <p>Email: {popupData.email}</p>
// // //               <p>Phone: {popupData.phone}</p>
// // //               <button onClick={closePopup}>Close</button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         <div className={`functionalities-bar ${showFunctionalitiesBar ? "expanded" : ""}`} onClick={toggleFunctionalitiesBar}>
// // //           <p>{showFunctionalitiesBar ? "Click to see more functionalities" : "70% of functionalities used"}</p>
// // //           {showFunctionalitiesBar && (
// // //             <div className="functionalities-details">
// // //               <p>Unexplored Functionalities:</p>
// // //               <ul>
// // //                 <li><a href="https://learningmaterial.com/feature1">Feature 1</a></li>
// // //                 <li><a href="https://learningmaterial.com/feature2">Feature 2</a></li>
// // //               </ul>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HomePage;
