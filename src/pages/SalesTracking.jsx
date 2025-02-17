// src/pages/SalesTracking.jsx
import { useState } from "react";

const SalesTracking = () => {
  const [salesData, setSalesData] = useState({
    dailySales: 1500, // Mock today's sales
    weeklySales: 10500, // Mock this week's sales
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center p-6 bg-blue-600 text-white shadow-md">
        <h1 className="text-3xl font-semibold">Sales Tracking</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Sales Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Today's Sales */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700">Today's Sales</h3>
            <p className="text-3xl text-gray-700 mt-2">${salesData.dailySales}</p>
            <p className="text-sm text-gray-500">Total sales today</p>
          </div>

          {/* This Week's Sales */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700">This Week's Sales</h3>
            <p className="text-3xl text-gray-700 mt-2">${salesData.weeklySales}</p>
            <p className="text-sm text-gray-500">Total sales this week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTracking;
