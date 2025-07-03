import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="page">
      <div className="header">
        <h1>EMPLOYEE TASK MANAGEMENT</h1>
      </div>
      <div className="tabs">
        <button>EMPLOYEE</button>
        <button>SALES (Turnover)</button>
        <button>SERVICE (Turnover)</button>
        <button>PROJECTS (Turnover)</button>
        <button>CUSTOMERS</button>
      </div>
      <div className="cards">
        {[...Array(4)].map((_, idx) => (
          <div className="card" key={idx}>
            <h3>{[
              "Top 5 Ongoing Activities",
              "Top 5 Performer of this FY",
              "Top 5 Products of this FY",
              "Top 5 Selling Products"
            ][idx]}</h3>
            <div className="bar-container">
              {["Desktop", "Speakers", "Headphones", "Rgb Keyboard", "Laptop HP xyz i5"].map((item, i) => (
                <div key={i}>
                  <div className="bar-label">
                    <span>{item}</span><span>{[65, 52, 42, 37, 14][i]}</span>
                  </div>
                  <div className="bar" style={{ width: `${[65, 52, 42, 37, 14][i]}%` }}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;