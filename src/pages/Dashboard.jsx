import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiTrendingUp, FiBox, FiAlertCircle, FiClipboard, FiShoppingCart } from "react-icons/fi"; 
import SalesTracking from "./SalesTracking";

const Dashboard = () => {
  const [stockAlert, setStockAlert] = useState(false);

  useEffect(() => {
    const stockLow = true;
    if (stockLow) {
      setStockAlert(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-200">
      {/* Header */}
      <header className="flex justify-between items-center p-8 bg-gradient-to-r from-orange-700 to-red-600 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">Restaurant Dashboard</h1>
        <nav className="space-x-6">
          <Link to="/inventory" className="hover:underline">Inventory</Link>
          <Link to="/sales" className="hover:underline">Sales</Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
          <Link to="/MenuManagement" className="hover:underline">Menu</Link>
        </nav>
      </header>

      {/* Stock Alert Notification */}
      {stockAlert && (
        <div className="bg-red-600 text-white p-4 mb-8 text-center rounded-lg shadow-md">
          <strong>⚠️ Alert:</strong> Low stock on essential kitchen ingredients!
        </div>
      )}

      <main className="p-8">
        {/* Dashboard Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sales Overview */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiTrendingUp className="text-orange-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Total Sales</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">$7,200</p>
                <p className="text-gray-500">Today's Revenue</p>
              </div>
            </div>
          </div>

          {/* Inventory Status */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiBox className="text-green-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Kitchen Inventory</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">8 Items Low</p>
                <p className="text-gray-500">Check stock levels</p>
              </div>
            </div>
          </div>

          {/* Order Alerts */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <div className="flex items-center space-x-4">
              <FiAlertCircle className="text-yellow-600 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Pending Orders</h3>
                <p className="text-4xl font-bold text-gray-900 mt-2">3 Urgent</p>
                <p className="text-gray-500">Requires immediate attention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Links */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Manage Inventory", to: "/inventory", color: "bg-orange-600", icon: <FiBox /> },
            { name: "Track Sales", to: "/sales", color: "bg-green-600", icon: <FiTrendingUp /> },
            { name: "Manage Orders", to: "/orders", color: "bg-yellow-600", icon: <FiShoppingCart /> },
            { name: "Menu Management", to: "/MenuManagement", color: "bg-red-600", icon: <FiClipboard /> },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`${link.color} flex items-center justify-center space-x-3 text-white p-6 rounded-xl shadow-lg hover:opacity-90 transition-transform transform hover:scale-105 text-center`}
            >
              {link.icon} <span>{link.name}</span>
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
