import { useState, useEffect } from "react";
import { FiAlertTriangle, FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [items, setItems] = useState([
    { name: "Chicken Breast", category: "Meat", stock: 10 },
    { name: "Lettuce", category: "Vegetables", stock: 3 },
    { name: "Milk", category: "Dairy", stock: 15 },
    { name: "Tomatoes", category: "Vegetables", stock: 5 },
    { name: "Cheese", category: "Dairy", stock: 2 },
  ]);

  const [filter, setFilter] = useState("All");
  const [stockAlert, setStockAlert] = useState(false);

  useEffect(() => {
    setStockAlert(items.some((item) => item.stock < 5));
  }, [items]);

  const handleUpdateStock = (index, newStock) => {
    const updatedItems = [...items];
    updatedItems[index].stock = newStock;
    setItems(updatedItems);
  };

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-green-700 text-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold">Restaurant Inventory</h1>
      </div>

      {/* Stock Alert */}
      {stockAlert && (
        <div className="flex items-center bg-red-500 text-white p-4 rounded-md shadow-md my-4">
          <FiAlertTriangle className="text-2xl mr-2" />
          <strong>Alert:</strong> Some ingredients are running low!
        </div>
      )}

      {/* Filter Options */}
      <div className="flex space-x-4 mb-6">
        {["All", "Meat", "Vegetables", "Dairy"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md font-semibold shadow-md ${
              filter === category ? "bg-green-700 text-white" : "bg-white text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Inventory Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className={`text-lg font-semibold ${item.stock < 5 ? "text-red-500" : "text-green-700"}`}>
                Stock: {item.stock}
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={item.stock}
                onChange={(e) => handleUpdateStock(index, parseInt(e.target.value))}
                className="p-2 border rounded w-20 text-center"
              />
              <FiEdit3 className="text-gray-600 ml-2" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Links */}
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

export default Inventory;
