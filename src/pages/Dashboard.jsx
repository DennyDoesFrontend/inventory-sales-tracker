// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SalesTracking from "./SalesTracking";

const Dashboard = () => {
  const [stockAlert, setStockAlert] = useState(false);

  useEffect(() => {
    // Simulate a stock alert for demo purposes
    const stockLow = true;
    if (stockLow) {
      setStockAlert(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Inventory & Sales Tracker</h1>
      </div>

      {/* Stock Alert Notification */}
      {stockAlert && (
        <div className="bg-red-500 text-white p-4 mb-6 text-center rounded-lg shadow-md">
          <strong>Alert:</strong> Low stock for some items!
        </div>
      )}

      <div className="p-6 space-y-6">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Real-time Sales */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700">Real-Time Sales</h3>
            <p className="text-3xl text-gray-700 mt-2">$5,000</p>
            <p className="text-sm text-gray-500">Today’s Total Sales</p>
          </div>

          {/* Stock Levels */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700">Stock Levels</h3>
            <p className="text-2xl text-gray-700 mt-2">10 items low in stock</p>
          </div>

          {/* Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700">Alerts</h3>
            <p className="text-2xl text-gray-700 mt-2">Low stock alert for "Item A"</p>
          </div>
        </div>

        {/* Links to manage inventory, view sales, orders, and settings */}
        <div className="flex space-x-4 mt-8">
          <Link to="/inventory" className="bg-blue-600 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">Manage Inventory</Link>
          <Link to="/sales" className="bg-green-600 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">View Sales</Link>
          <Link to="/orders" className="bg-yellow-600 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">Manage Orders</Link>
          <Link to="/settings" className="bg-gray-600 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">Settings</Link>
        </div>
      </div>

      {/* Embed Sales Tracking */}
      <SalesTracking />
    </div>
  );
};

export default Dashboard;
