import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NotificationPanel from './components/NotificationPanel';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Employee from './pages/Employee';
import Notification from './pages/Notification';
import Turnover from './pages/Turnover';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/turnover" element={<Turnover />} />
          </Routes>
        </div>
        <NotificationPanel />
      </div>
    </Router>
  );
}

export default App;