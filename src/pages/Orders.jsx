import { useState } from "react";
import { Link } from "react-router-dom";
import { FiBox, FiTruck, FiCheckCircle } from "react-icons/fi"; // Icons for modern touch

const Orders = () => {
  const [orders, setOrders] = useState([
    { orderId: 1, customerName: "John Doe", food: "Burger", price: 12.99, status: "Pending", orderTable: 'Table 4' },
    { orderId: 2, customerName: "Jane Smith", food: "Pizza", price: 15.49, status: "Delivered", orderTable: 'Table 7' },
    { orderId: 3, customerName: "Alice Johnson", food: "Pasta", price: 9.99, status: "Pending", orderTable: 'Table 9' },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toString().includes(searchQuery) ||
      order.food.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStatus = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId
          ? { ...order, status: order.status === "Delivered" ? "Pending" : "Delivered" }
          : order
      )
    );
  };

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
                  <h3 className="text-xl font-semibold text-gray-800">{order.food}</h3>
                  <p className="text-gray-700">Order ID: {order.orderId}</p>
                  <p className="text-gray-700">Customer: {order.customerName}</p>
                  <p className="text-sm text-gray-500">Price: ${order.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Status: {order.status}</p>
                  <p className="text-sm text-gray-500">Order Table: {order.orderTable}</p>
                </div>
              </div>

              <div className="mt-4 flex space-x-3">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                  View Details
                </button>
                <button
                  onClick={() => toggleStatus(order.orderId)}
                  className={`${
                    order.status === "Delivered" ? "bg-yellow-600" : "bg-green-600"
                  } text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition duration-200`}
                >
                  {order.status === "Delivered" ? "Mark as Not Delivered" : "Mark as Delivered"}
                </button>
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
