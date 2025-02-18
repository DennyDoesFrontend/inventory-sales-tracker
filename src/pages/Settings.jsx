// src/pages/Settings.jsx
import { useState } from "react";
import { FiBell, FiShield, FiCreditCard } from "react-icons/fi"; // Icons for a modern touch
import { Link } from "react-router-dom";

const Settings = () => {
  const [lowStockAlertEnabled, setLowStockAlertEnabled] = useState(false);
  const [roles, setRoles] = useState(["Admin"]);

  const handleAlertToggle = () => {
    setLowStockAlertEnabled(!lowStockAlertEnabled);
  };

  const handleAddRole = () => {
    setRoles([...roles, "Manager"]);
  };

  const handleRemoveRole = (role) => {
    setRoles(roles.filter(r => r !== role));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="flex justify-between p-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-extrabold tracking-wide">Settings</h1>
      </div>

      <div className="p-6">
        {/* Low Stock Alert Settings */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition mb-6">
          <div className="flex items-center space-x-4">
            <FiBell className="text-yellow-600 text-4xl" />
            <div>
              <h3 className="text-lg font-bold text-gray-800">Low Stock Alert</h3>
              <p className="text-gray-600">Set up a notification when stock is low for any item.</p>
              <button
                onClick={handleAlertToggle}
                className={`mt-4 bg-${lowStockAlertEnabled ? 'green' : 'yellow'}-600 text-white p-2 rounded-full hover:opacity-90 transition`}
              >
                {lowStockAlertEnabled ? "Disable Alert" : "Enable Alert"}
              </button>
            </div>
          </div>
        </div>

        {/* Role-Based Access Control */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition mb-6">
          <div className="flex items-center space-x-4">
            <FiShield className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-lg font-bold text-gray-800">Role-Based Access</h3>
              <p className="text-gray-600">Manage user roles and permissions (Admin, Manager, etc.).</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Current Roles:</h4>
                <ul>
                  {roles.map((role) => (
                    <li key={role} className="flex justify-between items-center text-gray-600">
                      <span>{role}</span>
                      <button onClick={() => handleRemoveRole(role)} className="text-red-600">Remove</button>
                    </li>
                  ))}
                </ul>
                <button onClick={handleAddRole} className="mt-4 bg-blue-600 text-white p-2 rounded-full hover:opacity-90 transition">
                  Add Manager Role
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Platform Integration */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition mb-6">
          <div className="flex items-center space-x-4">
            <FiCreditCard className="text-yellow-600 text-4xl" />
            <div>
              <h3 className="text-lg font-bold text-gray-800">Payment Platforms</h3>
              <p className="text-gray-600">Integrate with payment platforms like Momo, PayPal, etc.</p>
              <button className="mt-4 bg-yellow-600 text-white p-2 rounded-full hover:opacity-90 transition">
                Configure Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Manage Inventory", to: "/inventory", color: "bg-blue-600" },
            { name: "View Sales", to: "/sales", color: "bg-green-600" },
            { name: "Manage Orders", to: "/orders", color: "bg-yellow-600" },
            { name: "Dashboard", to: "/dashboard", color: "bg-gray-800" },
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
    </div>
  );
};

export default Settings;
