// src/pages/Settings.jsx
import { useState } from "react";

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
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between p-6 bg-blue-600 text-white">
        <h1 className="text-2xl">Settings</h1>
      </div>

      <div className="p-6">
        {/* Low Stock Alert Settings */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-lg font-bold">Low Stock Alert</h3>
          <p>Set up a notification when stock is low for any item.</p>
          <button
            onClick={handleAlertToggle}
            className={`bg-${lowStockAlertEnabled ? 'green' : 'yellow'}-600 text-white p-2 rounded`}
          >
            {lowStockAlertEnabled ? "Disable Alert" : "Enable Alert"}
          </button>
        </div>

        {/* Role-Based Access Control */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-lg font-bold">Role-Based Access</h3>
          <p>Manage user roles and permissions (Admin, Manager, etc.).</p>
          <div>
            <h4 className="font-semibold">Current Roles:</h4>
            <ul>
              {roles.map((role) => (
                <li key={role} className="flex justify-between">
                  <span>{role}</span>
                  <button onClick={() => handleRemoveRole(role)} className="text-red-600">Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={handleAddRole} className="bg-blue-600 text-white p-2 rounded mt-2">Add Manager Role</button>
          </div>
        </div>

        {/* Payment Platform Integration */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-lg font-bold">Payment Platforms</h3>
          <p>Integrate with payment platforms like Momo, PayPal, etc.</p>
          <button className="bg-yellow-600 text-white p-2 rounded">Configure Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
