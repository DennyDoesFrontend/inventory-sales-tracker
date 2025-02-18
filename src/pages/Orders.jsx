import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBox, FiTruck, FiCheckCircle } from "react-icons/fi"; // Icons for modern touch

const Orders = () => {
  const [orders, setOrders] = useState([
    { orderId: 1, itemName: "Item A", quantity: 2, status: "Pending" },
    { orderId: 2, itemName: "Item B", quantity: 1, status: "Shipped" },
    { orderId: 3, itemName: "Item C", quantity: 5, status: "Pending" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toString().includes(searchQuery) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <header className="flex justify-between items-center p-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">Manage Orders</h1>
        <nav className="space-x-6">
          <Link to="/inventory" className="hover:underline">Inventory</Link>
          <Link to="/sales" className="hover:underline">Sales</Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </nav>
      </header>

      {/* Search Bar */}
      <div className="p-8">
        <input
          type="text"
          placeholder="Search Orders"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Orders List */}
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <div className="flex items-center space-x-4">
                <FiBox className="text-blue-600 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{order.itemName}</h3>
                  <p className="text-gray-700">Order ID: {order.orderId}</p>
                  <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                  <p className="text-sm text-gray-500">Status: {order.status}</p>
                </div>
              </div>

              <div className="mt-4 flex space-x-3">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                  View Details
                </button>
                {order.status !== "Shipped" && (
                  <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200">
                    Mark as Shipped
                  </button>
                )}
                {order.status !== "Delivered" && (
                  <button className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition duration-200">
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Links */}
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

export default Orders;
