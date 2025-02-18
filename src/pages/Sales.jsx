import { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sales = () => {
  const [salesData, setSalesData] = useState([
    { item: "Item A", amount: 200 },
    { item: "Item B", amount: 150 },
    { item: "Item C", amount: 500 },
  ]);

  const totalSales = salesData.reduce((acc, sale) => acc + sale.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-blue-700 text-white shadow-md">
        <h1 className="text-3xl font-semibold">Sales Tracker</h1>
      </div>

      <div className="p-6">
        {/* Total Sales Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Today's Total Sales</h3>
            <p className="text-3xl font-bold text-blue-700">${totalSales}</p>
          </div>
          <FiTrendingUp className="text-5xl text-green-500" />
        </div>

        {/* Sales Data Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-3 text-left">Item Name</th>
                  <th className="p-3 text-center">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-4">{sale.item}</td>
                    <td className="p-4 text-center font-bold">${sale.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Manage Orders", to: "/orders", color: "bg-blue-600" },
          { name: "View Sales", to: "/sales", color: "bg-green-600" },
          { name: "Settings", to: "/settings", color: "bg-gray-800" },
          { name: "Dashboard", to: "/dashboard", color: "bg-teal-500" },
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

export default Sales;
