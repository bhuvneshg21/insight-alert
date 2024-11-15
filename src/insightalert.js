import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import "./InsightAlertDashboard.css";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { allChartData } from "./data";
import { FaDownload } from "react-icons/fa";
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

const InsightAlertDashboard = () => {
  const [dateRange, setDateRange] = useState("Current Month");

  const handleDownload = (chartData, tableData, fileName) => {
    const sheetData = [
      ...tableData.map((row) => row),
      ["Chart Data"],
      ...chartData.datasets.map((dataset) => [dataset.label, ...dataset.data]),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(data, `${fileName}.xlsx`);
  };

  const renderSection = (
    sectionKey,
    chartType,
    labels,
    datasets,
    tableHeaders,
    chartOptions = {}
  ) => {
    const sectionData = allChartData[dateRange][sectionKey];
    const chartData = {
      labels: labels,
      datasets: datasets.map((dataset, index) => ({
        label: dataset.label,
        data: sectionData.chartData.datasets[index].data,
        backgroundColor: dataset.color,
      })),
    };

    const ChartComponent = chartType === "Bar" ? Bar : Doughnut;

    return (
      <div className="dashboard-section">
        <h3 className="chart-header">
          {sectionKey.replace(/([A-Z])/g, " $1")}
        </h3>
        <div className="download-icon-container" title="Download">
          <FaDownload
            className="download-icon"
            onClick={() =>
              handleDownload(chartData, sectionData.tableData, sectionKey)
            }
          />
        </div>
        <div className="chart-container">
          <ChartComponent data={chartData} options={chartOptions} />
        </div>
        <table className="data-table compact-table">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sectionData.tableData.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="recommendation-text">
          <strong>Recommendation:</strong> {sectionData.recommendation}
        </p>
      </div>
    );
  };

  const engagementFunnelOptions = {
    indexAxis: "y",
    scales: { x: { beginAtZero: true } },
  };

  const contactDataAccuracyOptions = {
    scales: {
      x: { stacked: true, ticks: { callback: (value) => `${value}%` } },
      y: { stacked: true },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
            const value = tooltipItem.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${tooltipItem.dataset.label}: ${percentage}%`;
          },
        },
      },
    },
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
          <img
            src={dialpad}
            alt="Insight Alert Icon"
            height="40px !important;"
          />
          <div className="user-initials">FG</div>
        </nav>
      </header>

      <section className="subheader">
        <div className="subheader-left">
          <img
            src={InsightAlertIcon}
            alt="Insight Alert Icon"
            className="insight-alert-icon"
          />
          <div className="insight-text">
            <h2>Insight Alert Dashboard</h2>
            <h4>Actionable Data for Optimal Results</h4>
          </div>
        </div>
        <div className="subheader-right">
          <div>
            <div>
              <strong>Account Manager:</strong>
              <a href="#">Spandana Chandra</a>
            </div>
            <div>
              <strong>Customer Success Manager:</strong>
              <a href="#">Jayakrishna Thirumeni</a>
            </div>
          </div>
          <label className="date-range-label">
            <strong>Date Range</strong>
          </label>
          <select
            className="date-range-select"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="Current Month">Current Month</option>
            <option value="Past Month">Past Month</option>
          </select>
        </div>
      </section>

      <div className="charts-container-vertical">
        {renderSection(
          "accountFit",
          "Bar",
          ["Low Fit", "Moderate Fit", "Great Fit"],
          [
            { label: "Whitespace Companies", color: "#9C27B0" },
            { label: "Target Accounts", color: "#4CAF50" },
          ],
          ["Account Fit Score", "Target Accounts", "Whitespace Companies"]
        )}
        {renderSection(
          "contactDataAccuracy",
          "Bar",
          ["Aaron", "Chris", "Kenith", "Clara"],
          [
            { label: "YTD Contact Data", color: "#6A1B9A" },
            { label: "Contact Data Exported", color: "#AB47BC" },
            { label: "Outdated Contact Data", color: "#8E24AA" },
          ],
          ["Contact Data Accuracy", "Aaron", "Chris", "Kenith", "Clara"],
          contactDataAccuracyOptions
        )}
        {renderSection(
          "engagementFunnel",
          "Bar",
          ["Accounts with Signals", "Signals Viewed", "Signals Actioned"],
          [
            { label: "Whitespace Companies", color: "#3F51B5" },
            { label: "Target Accounts", color: "#2196F3" },
          ],
          ["Engagement Funnel", "Target Accounts", "Whitespace Companies"],
          engagementFunnelOptions
        )}
        {renderSection(
          "recommendedPlays",
          "Doughnut",
          [
            "Researched Intent Topics",
            "Find Buying Group",
            "Funding",
            "Hiring Plans",
            "Send AI Email",
          ],
          [
            {
              label: "Recommended Plays",
              color: ["#6A1B9A", "#AB47BC", "#8E24AA", "#BA68C8", "#CE93D8"],
            },
          ],
          ["Recommended Plays", "Target Accounts"]
        )}
      </div>
    </div>
  );
};

export default InsightAlertDashboard;
