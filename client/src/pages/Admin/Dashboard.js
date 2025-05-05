import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.email}!</p>}
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;