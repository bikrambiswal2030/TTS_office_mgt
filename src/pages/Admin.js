import React from 'react';
import '../styles/Admin.css';

function Admin() {
  return (
    <div className="page">
      <div className="header">
        <h1>ADMIN</h1>
      </div>
      <div className="tabs">
        <button>EMPLOYEE</button>
        <button>SALES (Turnover)</button>
        <button>SERVICE (Turnover)</button>
        <button>PROJECTS (Turnover)</button>
        <button>CUSTOMERS</button>
      </div>
      <div className="admin-cards">
        <div className="admin-card">ADMIN<br />MANAGEMENT</div>
        <div className="admin-card">HR<br />SUPERVISOR</div>
      </div>
    </div>
  );
}

export default Admin;