// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiTrendingUp, FiBox, FiAlertCircle } from "react-icons/fi"; // Icons for a modern touch
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <header className="flex justify-between items-center p-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">Inventory Dashboard</h1>
        <nav className="space-x-6">
          <Link to="/inventory" className="hover:underline">Inventory</Link>
          <Link to="/sales" className="hover:underline">Sales</Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </nav>
      </header>

      {/* Stock Alert Notification */}
      {stockAlert && (
        <div className="bg-red-600 text-white p-4 mb-8 text-center rounded-lg shadow-md">
          <strong>⚠️ Alert:</strong> Low stock on critical items!
        </div>
      )}

      <main className="p-8">
        {/* Dashboard Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Real-time Sales */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiTrendingUp className="text-blue-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Real-Time Sales</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">$5,000</p>
                <p className="text-gray-500">Today’s Total Sales</p>
              </div>
            </div>
          </div>

          {/* Stock Levels */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiBox className="text-green-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Stock Levels</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">10 Items Low</p>
                <p className="text-gray-500">Low stock alerts active</p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiAlertCircle className="text-yellow-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Alerts</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">Item B Critical</p>
                <p className="text-gray-500">Immediate restock required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Links */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Manage Inventory", to: "/inventory", color: "bg-blue-600" },
            { name: "View Sales", to: "/sales", color: "bg-green-600" },
            { name: "Manage Orders", to: "/orders", color: "bg-yellow-600" },
            { name: "Settings", to: "/settings", color: "bg-gray-800" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`${link.color} text-white p-6 rounded-xl shadow-lg hover:opacity-90 transition-transform transform hover:scale-105 text-center`}
            >
              {link.name}
            </Link>
          ))}
        </section>
      </main>

      {/* Embed Sales Tracking */}
      <SalesTracking />
    </div>
  );
};

export default Dashboard;
