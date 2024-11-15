import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { customersData } from "./data";
import "./InsightAlertDashboard.css";
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
        <div className="insight-alert">
          <img
            src={InsightAlertIcon}
            alt="Insight Alert Icon"
            className="insight-alert-icon"
          />
          <h2>Insight Alert Dashboard</h2>
        </div>
        <p className="subheader-text">Actionable Data for Optimal Results</p>
        <div className="manager-info">
          <span>
            <strong>Account Manager:</strong> Spandana Chandra
          </span>
          <span>
            <strong>Customer Success Manager:</strong> Jayakrishna Thirumeni
          </span>
        </div>
      </section>

      <div className="dashboard-sections">
        {/* Account Fit Score */}
        <div className="dashboard-section">
          <h2>Account Fit Score</h2>
          <Bar
            data={{
              ...sections.accountFitScore.chartData,
              datasets: [
                {
                  ...sections.accountFitScore.chartData.datasets[0],
                  backgroundColor: ["#a155b9", "#9e5fbb", "#6e1c75"],
                },
              ],
            }}
            options={{ responsive: true }}
            width={300}
            height={300}
          />
          <button className="download-icon">⬇️</button>
          <table>
            <thead>
              <tr>
                <th>Account Fit Score</th>
                <th>Target Accounts</th>
                <th>Whitespace Companies</th>
              </tr>
            </thead>
            <tbody>
              {sections.accountFitScore.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.fitLevel}</td>
                  <td>{row.targetAccounts}</td>
                  <td>{row.whitespace}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{sections.accountFitScore.description}</p>
        </div>

        {/* Contact Data Accuracy (Stacked Bar) */}
        <div className="dashboard-section">
          <h2>Contact Data Accuracy (Exported)</h2>
          <Bar
            data={{
              ...sections.contactDataAccuracy.chartData,
              datasets: [
                {
                  ...sections.contactDataAccuracy.chartData.datasets[0],
                  backgroundColor: "#5f63eb",
                },
                {
                  ...sections.contactDataAccuracy.chartData.datasets[1],
                  backgroundColor: "#b63ab9",
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
            }}
            width={300}
            height={300}
          />
          <button className="download-icon">⬇️</button>
          <table>
            <thead>
              <tr>
                <th>Contact Accuracy</th>
                <th>Exported</th>
                <th>Outdated</th>
              </tr>
            </thead>
            <tbody>
              {sections.contactDataAccuracy.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.exported}</td>
                  <td>{row.outdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{sections.contactDataAccuracy.description}</p>
        </div>

        {/* Engagement Funnel */}
        <div className="dashboard-section">
          <h2>Engagement Funnel</h2>
          <Bar
            data={{
              ...sections.engagementFunnel.chartData,
              datasets: [
                {
                  ...sections.engagementFunnel.chartData.datasets[0],
                  backgroundColor: ["#a155b9", "#5f63eb", "#b63ab9"],
                },
              ],
            }}
            options={{ responsive: true, indexAxis: "y" }}
            width={300}
            height={300}
          />
          <button className="download-icon">⬇️</button>
          <table>
            <thead>
              <tr>
                <th>Engagement Funnel</th>
                <th>Target Accounts</th>
                <th>Whitespace Companies</th>
              </tr>
            </thead>
            <tbody>
              {sections.engagementFunnel.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.step}</td>
                  <td>{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{sections.engagementFunnel.description}</p>
        </div>

        {/* Recommended Plays (Donut) */}
        <div className="dashboard-section">
          <h2>Recommended Plays</h2>
          <Doughnut
            data={{
              ...sections.recommendedPlays.chartData,
              datasets: [
                {
                  ...sections.recommendedPlays.chartData.datasets[0],
                  backgroundColor: [
                    "#a155b9",
                    "#9e5fbb",
                    "#5f63eb",
                    "#b63ab9",
                    "#6e1c75",
                  ],
                },
              ],
            }}
            options={{ responsive: true }}
            width={300}
            height={300}
          />
          <button className="download-icon">⬇️</button>
          <table>
            <thead>
              <tr>
                <th>Recommended Plays</th>
                <th>Target Accounts</th>
              </tr>
            </thead>
            <tbody>
              {sections.recommendedPlays.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.play}</td>
                  <td>{row.targetAccounts}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>{sections.recommendedPlays.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightAlertDashboard;
