import { useState } from "react";
import { FiTrendingUp, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sales = () => {
  const [filter, setFilter] = useState("Today"); // Filter selection
  const [salesData, setSalesData] = useState([
    { id: 1, item: "Grilled Chicken", amount: 15.99, status: "Completed", payment: "Card", date: "Today" },
    { id: 2, item: "Pasta Carbonara", amount: 12.5, status: "Pending", payment: "Cash", date: "Today" },
    { id: 3, item: "Margherita Pizza", amount: 18, status: "Completed", payment: "Card", date: "This Week" },
    { id: 4, item: "Caesar Salad", amount: 10, status: "Completed", payment: "Cash", date: "This Month" },
    { id: 5, item: "Steak & Fries", amount: 25, status: "Refunded", payment: "Card", date: "This Week" },
  ]);

  // Filter sales based on selection
  const filteredSales = salesData.filter((sale) => sale.date === filter);
  const totalSales = filteredSales.reduce((acc, sale) => acc + sale.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-red-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Restaurant Sales</h1>
      </div>

      {/* Total Sales Card */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Total Sales ({filter})</h3>
          <p className="text-3xl font-bold text-red-600">${totalSales.toFixed(2)}</p>
        </div>
        <FiTrendingUp className="text-5xl text-green-500" />
      </div>

      {/* Filter Dropdown */}
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Sales Records</h3>
        <div className="relative">
          <select
            className="p-3 border rounded-lg shadow-sm bg-white text-gray-700 focus:outline-none focus:ring focus:border-red-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>
      </div>

      {/* Sales Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSales.length > 0 ? (
          filteredSales.map((sale) => (
            <div key={sale.id} className="bg-white p-5 rounded-lg shadow-md flex flex-col">
              <h4 className="text-lg font-bold text-gray-800">{sale.item}</h4>
              <p className="text-red-500 font-semibold text-lg">${sale.amount.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Payment: {sale.payment}</p>
              <p className={`text-sm font-semibold mt-2 ${sale.status === "Completed" ? "text-green-600" : sale.status === "Pending" ? "text-yellow-600" : "text-red-500"}`}>
                {sale.status}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No sales records found.</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Manage Orders", to: "/orders", color: "bg-red-600" },
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
