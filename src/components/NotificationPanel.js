import React, { useEffect, useState } from 'react';

const mockMessages = [
  '📈 Sales increased by 5%',
  '👨‍💼 New employee joined HR team',
  '🔧 Server maintenance scheduled at 11 PM',
  '📊 Monthly report ready for download',
  '✅ Attendance data synced',
  '🕒 Meeting scheduled at 3:00 PM',
  '⚠️ Storage usage at 85%',
  '🛠 Backup completed successfully',
  '🔐 New security policy implemented',
  '🚚 Delivery pending from warehouse'
];

function NotificationPanel() {
  const [notifications, setNotifications] = useState([
    '✔ System started successfully',
    '📢 Welcome to the notification panel'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
      setNotifications(prev => [...prev, msg]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-panel">
      <h3>NOTIFICATIONS</h3>
      <div className="notification-box">
        {notifications.map((n, i) => (
          <div key={i} className="notification">{n}</div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;