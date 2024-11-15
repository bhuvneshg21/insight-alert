import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { customersData } from "./data";
import "./InsightAlertDashboard.css";
import { data } from "./data";
import InsightAlertIcon from "./assets/InsightAlert.png";
import dialpad from "./assets/num.png";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InsightAlertDashboard = ({ selectedCustomerId }) => {
  const customerData = customersData.find(
    (customer) => customer.id === selectedCustomerId
  );

  if (!customerData) return <div>Customer data not found</div>;

  const { sections } = customerData;

  const [dateRange, setDateRange] = useState("Current Month");
  const chartData = data[dateRange];

  const handleDownload = (fileName, tableData) => {
    // Ensure fileName and tableData are defined before executing the function
    if (!fileName || !tableData) return;

    const csvContent = tableData.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.csv`;
    a.click();
  };

  return (
    <div className="insight-alert-dashboard">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            Sales<sup>+</sup>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for companies, contacts, industries, etc."
            />
            <span className="advanced-search">Advanced Search</span>
          </div>
        </div>
        <nav className="header-menu">
          <a href="#" className="menu-item">
            Home
          </a>
          <a href="#" className="menu-item">
            Intent
          </a>
          <a href="#" className="menu-item">
            Tracker
          </a>
          <a href="#" className="menu-item">
            Lists
          </a>
          <a href="#" className="menu-item">
            WebSights
          </a>
          <a href="#" className="menu-item">
            Workflows
          </a>
          <a href="#" className="menu-item">
            Chat
          </a>
          <a href="#" className="menu-item">
            More
          </a>
          <span className="notification-icon">🔔</span>
          <img src={dialpad} alt="Insight Alert Icon" />
          {/* <span className="notification-icon">
            <FontAwesomeIcon icon={faTh} />
          </span> */}

          <div className="user-initials">FG</div>
        </nav>
      </header>

      <section className="subheader">
        <div className="header-left">
          <h1>Insight Alert Dashboard</h1>
          <h2>Actionable Data for Optimal Results</h2>
        </div>
        <div className="header-right">
          <div className="manager">
            <span>
              Account Manager: <strong>Spandana Chandra</strong>
            </span>
            <span>
              Customer Success Manager: <strong>Jayakrishna Thirumeni</strong>
            </span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option>Current Month</option>
              <option>Past Month</option>
            </select>
          </div>
        </div>
      </section>

      {/* Account Fit Score Section */}
      <section className="chart-section">
        <div className="chart-header">
          <h3>Account Fit Score</h3>
          <button
            onClick={() =>
              handleDownload(
                "Account_Fit_Score",
                chartData.accountFit.tableData
              )
            }
          >
            <i className="download-icon">↓</i> Download
          </button>
        </div>
        <Bar data={chartData.accountFit.chartData} />
        <table className="data-table">
          <thead>
            <tr>
              <th>Account Fit Score</th>
              <th>Target Accounts</th>
              <th>Whitespace Companies</th>
            </tr>
          </thead>
          <tbody>
            {chartData.accountFit.tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="recommendation">
          <strong>Recommendation:</strong> {chartData.accountFit.recommendation}
        </p>
      </section>

      {/* Contact Data Accuracy Section */}
      <section className="chart-section">
        <div className="chart-header">
          <h3>Contact Data Accuracy (Exported)</h3>
          <button
            onClick={() =>
              handleDownload(
                "Contact_Data_Accuracy",
                chartData.contactDataAccuracy.tableData
              )
            }
          >
            <i className="download-icon">↓</i> Download
          </button>
        </div>
        <Bar
          data={chartData.contactDataAccuracy.chartData}
          options={{ indexAxis: "y" }} // Make it horizontal
        />
        <table className="data-table">
          <thead>
            <tr>
              <th>Contact Data Accuracy</th>
              <th>Aaron</th>
              <th>Chris</th>
              <th>Kenith</th>
              <th>Clara</th>
            </tr>
          </thead>
          <tbody>
            {chartData.contactDataAccuracy.tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="recommendation">
          <strong>Recommendation:</strong>{" "}
          {chartData.contactDataAccuracy.recommendation}
        </p>
      </section>

      {/* Engagement Funnel Section */}
      <section className="chart-section">
        <div className="chart-header">
          <h3>Engagement Funnel</h3>
          <button
            onClick={() =>
              handleDownload(
                "Engagement_Funnel",
                chartData.engagementFunnel.tableData
              )
            }
          >
            <i className="download-icon">↓</i> Download
          </button>
        </div>
        <Bar
          data={chartData.engagementFunnel.chartData}
          options={{ indexAxis: "y" }} // Make it horizontal
        />
        <table className="data-table">
          <thead>
            <tr>
              <th>Engagement Funnel</th>
              <th>Target Accounts</th>
              <th>Whitespace Companies</th>
            </tr>
          </thead>
          <tbody>
            {chartData.engagementFunnel.tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="recommendation">
          <strong>Recommendation:</strong>{" "}
          {chartData.engagementFunnel.recommendation}
        </p>
      </section>

      {/* Recommended Plays Section */}
      <section className="chart-section">
        <div className="chart-header">
          <h3>Recommended Plays (Actioned)</h3>
          <button
            onClick={() =>
              handleDownload(
                "Recommended_Plays",
                chartData.recommendedPlays.tableData
              )
            }
          >
            <i className="download-icon">↓</i> Download
          </button>
        </div>
        <Doughnut data={chartData.recommendedPlays.chartData} />
        <table className="data-table">
          <thead>
            <tr>
              <th>Recommended Plays</th>
              <th>Target Accounts</th>
            </tr>
          </thead>
          <tbody>
            {chartData.recommendedPlays.tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="recommendation">
          <strong>Recommendation:</strong>{" "}
          {chartData.recommendedPlays.recommendation}
        </p>
      </section>
    </div>
  );
};

export default InsightAlertDashboard;
